import React from 'react';

export default function (props) {
  const { id } = props.match.params;
  return (
    <h2>This page is about Member of No.{id}</h2>
  );
};