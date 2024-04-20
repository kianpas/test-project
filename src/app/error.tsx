"use client"

import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const Error: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div>Error</div>
  )
}

export default Error