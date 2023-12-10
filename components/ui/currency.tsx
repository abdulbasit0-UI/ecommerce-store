"use client";

import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

import { formmater } from "../../lib/utils";
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formmater.format(Number(value))}</div>;
};

export default Currency;
