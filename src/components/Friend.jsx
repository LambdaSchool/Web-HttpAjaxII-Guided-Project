import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  .uuid {
    font-size: .7rem;
    color: green;
  }
`;

export default function Friend({ data }) {
  if (!data) return null;

  return (
    <Styled>
      {data.name} is {data.age}, id <span className='uuid'>{data.id}</span>
    </Styled>
  );
}
