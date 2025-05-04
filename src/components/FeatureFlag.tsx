import React, { ReactNode } from 'react';

interface FeatureFlagProps {
  name: string;
  children: ReactNode;
}

// This is a simple implementation. In a real-world app, 
// you might fetch feature flags from an API or environment variables.
const FEATURE_FLAGS = {
  COMING_SOON: false,
  ONLINE_ORDERING: false,
  MERCH_STORE: false
};

const FeatureFlag = ({ name, children }: FeatureFlagProps) => {
  // If the feature flag doesn't exist or is false, don't render anything
  if (!FEATURE_FLAGS[name as keyof typeof FEATURE_FLAGS]) {
    return null;
  }

  // Otherwise, render the children
  return <>{children}</>;
};

export default FeatureFlag;
