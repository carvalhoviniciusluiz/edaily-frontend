import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
`;

export const BoxMenu = styled.div`
  width: 300px;
  height: 85vh;
  overflow-y: auto;

  ul {
    @media (max-width: 882px) {
      padding-bottom: 63px;
    }

    li {
      position: relative;
      padding: 15px 20px 15px 30px;
      background: #f4f3f1;
      border-bottom: 1px solid #e0e0e0;
      border-top: 1px solid #fff;
      border-right: 2px solid #ccc;
      cursor: pointer;

      &:hover {
        background: #fff;
        border-right: 2px solid #fff;

        div strong {
          text-decoration: underline;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        strong {
          font-size: 14px;
          font-weight: normal;
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        span {
          font-size: 0.75rem;
          color: #888c9b;
        }
      }

      &.none {
        div strong {
          color: #888c9b;
          text-decoration: none;
        }
      }

      &.active {
        background: #fff;
        border-right: 2px solid #fff;

        div strong {
          font-weight: bold;
        }
      }

      &.reviewed {
        display: flex;
        justify-content: space-between;
        background: #e0eef6;

        &:hover {
          background: #fff;
          border-right: 2px solid #fff;
        }

        div {
          strong {
            color: #555;
          }
        }

        div.reviewed-numbers {
          span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;

            color: #888c9b;

            small {
              margin-left: 6px;
            }
          }
        }
      }

      @media (max-width: 882px) {
        &:last-child {
          border-bottom: 2px solid #e0e0e0;
        }
      }
    }
  }
`;

export const BoxContent = styled.div``;
