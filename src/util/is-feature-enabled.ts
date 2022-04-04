const bool = (val: string): boolean => (/^true|1$/i).test(val.trim());

const isFeatureEnabled = (name: string): boolean => {
  const envName = `REACT_APP_FEATURE_${name.toUpperCase()}`;
  const envValue = process.env[envName]?.toString() || '';

  return bool(envValue);
};

export default isFeatureEnabled;
