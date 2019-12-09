import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 882px) {
    margin-bottom: 80px;
  }

  @media (max-width: 552px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const BoxMenu = styled.div`
  width: 300px;
  height: 85vh;
  overflow-y: auto;

  ul {
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
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        strong {
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;

          font-size: 13px;
          font-weight: bold;
          line-height: 16px;
          color: #333;

          font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial,
            sans-serif !important;
        }

        span {
          font-size: 0.75rem;
          color: #808080;
        }
      }

      &.none {
        div {
          strong {
            color: #888c9b;
            font-weight: normal;
          }
        }
      }

      &.active {
        background: #fff;
        border-right: 2px solid #fff;
        div {
          strong {
            font-weight: normal;
          }
        }
      }

      &.reviewed {
        display: flex;
        justify-content: space-between;
        background: #e0eef6;

        &:hover {
          background: #fff;
        }

        div {
          strong {
            color: #555;
            font-weight: normal;
          }
        }

        div.reviewed-numbers {
          span {
            display: flex;
            align-items: center;
            justify-content: space-between;

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

export const BoxContent = styled.div`
  background: #fff;
  width: 100%;
  height: 85vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    font: bold 20px Arial;
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial,
      sans-serif !important;
    padding: 14px 30px 20px;

    @media (max-width: 882px) {
      strong {
        display: none;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  div.footer {
    width: 100%;
    padding: 20px;
    border-top: 1px solid #ccc;
    background: #fafafa;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 882px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 662px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    div {
      input {
        margin-left: 10px;
      }
      div.actions {
        margin-right: 10px;
      }
    }
  }
`;

export const Documentthumbnail = styled.li`
  display: block;
  text-align: center;

  padding: 20px;
  border-radius: 4px;
  background: #fff;

  img {
    cursor: pointer;
    background: #fff;
    width: 60px;
    height: 75px;
    padding: 1px;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 0 #e0e0e0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 16px;
      resize: horizontal;
      font: bold 13px/16px Helvetica, Arial;
    }
  }
`;

export const InputItem = styled.div`
  width: 90%;
  position: relative;
  margin-bottom: 10px;

  display: flex;

  @media (max-width: 662px) {
    width: 100%;
  }

  input {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 14px;
    border-right: none;
    padding: 0 30px 0 12px;
    border: 2px solid #e5e5e5;
    border-right: 0;
    background: #fafafa;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 44px;
    color: rgb(68, 67, 75);
    background: transparent;
    border: 2px solid #e5e5e5;
    border-left: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    padding-right: 16px;
    background: #fafafa;

    button {
      background: transparent;
      border: 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
