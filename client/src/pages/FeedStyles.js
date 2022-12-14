import styled from "styled-components";

export const PostList = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;
  }

  article header {
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  article header .user-info {
    display: flex;
    flex-direction: column;
  }

  article header .user-info span {
    font-size: 13px;
  }

  article header .user-info span.place {
    font-size: 11px;
    color: #666;
    margin-top: 3px;
  }

  article > img {
    width: 100%;
  }

  article > footer {
    padding: 20px;
  }

  article > footer .actions {
    margin-bottom: 10px;
  }

  article > footer .actions button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  article > footer .actions img {
    height: 20px;
    margin-right: 10px;
  }

  article > footer p {
    font-size: 13px;
    margin-top: 2px;
    line-height: 18px;
  }

  article > footer p span {
    color: #7159c1;
    display: block;
  }
`;
