import styled from 'styled-components';

export const Container = styled.div`
  pre {
    background: #fff;
    display: block;
    margin-left: 100px;
    margin-top: 120px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 50px;

    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4em;

    word-wrap: break-word;
    white-space: pre-wrap;
    overflow: hidden;
  }
  pre[page='A4'] {
    width: 21cm;
    height: 29.7cm;
  }
  pre[page='A4'][layout='landscape'] {
    width: 29.7cm;
    height: 21cm;
  }

  @media (max-width: 882px) {
    pre {
      margin: 0;
      padding: 0;
    }
  }
`;
