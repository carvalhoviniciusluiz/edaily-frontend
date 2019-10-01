import styled, { css } from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  margin-bottom: 15px;
  text-align: left;
  margin-top: 25px;

  table {
    width: 100%;

    border-spacing: 0;
    border-collapse: collapse;

    thead {
      background: #f2f2f2;
    }

    th,
    td {
      padding: 8px 4px;
    }
  }

  .table-striped {
    border: 1px solid #ddd;
    background: #fff;

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  .progress {
    margin: 0;
    margin-top: 5px;

    &.sm {
      height: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .table-responsive {
      min-height: 0.01%;
      overflow-x: auto;
      border-radius: 4px;
    }

    table {
      width: 600px;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;

    .btn {
      border-radius: 3px;
      box-shadow: none;
      border: 1px solid transparent;
    }

    label.file-uploads {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 200px;
      height: 30px;
      padding: 10px;
      margin-top: 10px;
      margin-right: 10px;
      cursor: pointer;

      transition: background 0.2s;

      &:hover {
        color: ${darken(0.03, '#444')};
      }

      strong {
        font-size: 14px;
        font-weight: normal;
      }

      input {
        width: 1px;
        height: 1px;
        opacity: 0;
      }
    }
  }
`;

export const ProgressBar = styled.div`
  float: left;
  height: 100%;
  line-height: 20px;
  border-radius: 1px;

  ${props =>
    props.percent &&
    css`
      width: ${`${props.percent}%`};
      color: #00c0ef;
      background-color: #00c0ef;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
      transition: width 0.6s ease;
      &::after {
        content: '*';
      }
    `}
`;
