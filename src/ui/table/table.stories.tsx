import faker from '@faker-js/faker';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { times } from 'lodash';
import { CellProps } from 'react-table';
import Table from './table';

export default {
  title: 'UI/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const data = times(7, () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  level: faker.datatype.number({ min: 0, max: 100 }),
}));

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Level',
    accessor: 'level',
  },
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
};

export const Loading = Template.bind({});
Loading.args = {
  data,
  columns,
  loading: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  data,
  columns: [
    {
      Header: () => <div style={{ textAlign: 'end' }}>ID</div>,
      accessor: 'id',
      Cell: ({ value }: CellProps<typeof data, string>) => <div style={{ textAlign: 'end' }}>{value}</div>,
      minWidth: 300,
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
      minWidth: 100,
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
      minWidth: 100,
    },
    {
      Header: 'Level',
      accessor: 'level',
      Cell: ({ value }: CellProps<typeof data, number>) => <div style={{ background: 'red', width: `${value}%`, height: 2 }} />,
      minWidth: 100,
    },
  ],
};
