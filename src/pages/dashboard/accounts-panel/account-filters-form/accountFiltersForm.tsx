import { AccountFilters } from 'domains/accounts/accounts.types';
import { isEmpty, isFinite } from 'lodash';
import { ChangeEvent, useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import Modal from 'ui/modal/modal';
import AccountFiltersFooter from './accountFiltersFooter';
import AccountFiltersHeader from './accountFiltersHeader';

interface AccountFiltersFormProps {
  filters: AccountFilters;
  open: boolean;
  onCancel: VoidFunction;
  onSubmit: (filters: AccountFilters) => void;
}

enum FormFields {
  MinimumAmount = 'minimumAmount',
  IncludeFoundationAccounts = 'includeFoundationAccounts',
  IncludeSecondLayerApplications = 'includeSecondLayerApplications',
}

interface FormValues {
  [FormFields.MinimumAmount]: string;
  [FormFields.IncludeFoundationAccounts]: boolean;
  [FormFields.IncludeSecondLayerApplications]: boolean;
}

function mapAccountFiltersToFormValues(filters: AccountFilters): FormValues {
  return {
    minimumAmount: String(filters.minimumAmount ?? ''),
    includeFoundationAccounts: filters.includeFoundationAccounts,
    includeSecondLayerApplications: filters.includeSecondLayerApplications,
  };
}

function validateAmount(amount: string) {
  if (isEmpty(amount)) {
    return true;
  }
  if (!isFinite(parseFloat(amount))) {
    return false;
  }
  if (parseFloat(amount) < 0) {
    return false;
  }
  return true;
}

function AccountFiltersForm({
  filters,
  open,
  onCancel,
  onSubmit,
}: AccountFiltersFormProps) {
  const [formValues, setFormValues] = useState<FormValues>(mapAccountFiltersToFormValues(filters));

  const isAmountInputValid = validateAmount(formValues.minimumAmount);

  const submit = () => {
    onSubmit({
      minimumAmount: formValues.minimumAmount
        ? parseFloat(formValues.minimumAmount)
        : undefined,
      includeFoundationAccounts: formValues.includeFoundationAccounts,
      includeSecondLayerApplications: formValues.includeSecondLayerApplications,
    });
  };

  const clearFilters = () => {
    setFormValues({
      minimumAmount: '',
      includeFoundationAccounts: false,
      includeSecondLayerApplications: false,
    });
  };

  const cancel = () => {
    setFormValues(mapAccountFiltersToFormValues(filters));
    onCancel();
  };

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeCheckboxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <Modal
      renderHeader={() => <AccountFiltersHeader />}
      renderFooter={() => (
        <AccountFiltersFooter
          onCancel={cancel}
          onClear={clearFilters}
          onSubmit={submit}
          submitDisabled={!isAmountInputValid}
        />
      )}
      open={open}
      onCancel={cancel}
      position="right"
    >
      <h6>
        Minimum number of XDC
      </h6>
      <Input
        type="number"
        placeholder="Minimum number of XDC"
        id={FormFields.MinimumAmount}
        name={FormFields.MinimumAmount}
        className="mb-4"
        value={formValues.minimumAmount}
        onChange={changeInputValue}
        invalid={!isAmountInputValid}
        min={0}
      />
      <h6>
        Special XDC Accounts
      </h6>
      <FormGroup className="m-2" check>
        <Input
          type="checkbox"
          color="primary"
          id={FormFields.IncludeFoundationAccounts}
          name={FormFields.IncludeFoundationAccounts}
          checked={formValues.includeFoundationAccounts}
          onChange={changeCheckboxValue}
        />
        <Label for={FormFields.IncludeFoundationAccounts} className="mb-0" check>
          Include XDC foundation accounts
        </Label>
      </FormGroup>
      <FormGroup className="m-2" check>
        <Input
          type="checkbox"
          color="primary"
          id={FormFields.IncludeSecondLayerApplications}
          name={FormFields.IncludeSecondLayerApplications}
          checked={formValues.includeSecondLayerApplications}
          onChange={changeCheckboxValue}
        />
        <Label for={FormFields.IncludeSecondLayerApplications} className="mb-0" check>
          Include second layer applications
        </Label>
      </FormGroup>
    </Modal>
  );
}

export default AccountFiltersForm;
