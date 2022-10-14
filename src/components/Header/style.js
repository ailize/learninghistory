import styled from "styled-components";

export const HeaderWrapper = styled.div`
width: 100%;
position: fixed;
top:0;
background-color: white;
z-index:100;
`;

export const HeaderNavBar = styled.div`
position: relative;
height:11.73333vw;
line-height: 11.73333vw;
padding: 0 3.2vw 0 4.8vw;
font-size: 0;
background-color: #fff;
a{
  text-decoration: none;
  &.logo{
float: left;
height: 11.73333vw;
.Navbar_logo {
  color: #fb7299;
  font-size: 7.46667vw;
}
  }
}
.right{
float: right;
height: 11.73333vw;
.search {
  margin-right: 5.86667vw;
  width: 5.86667vw;
  height: 5.86667vw;
  display: inline-block;
  margin-top: 0.53333vw;
  i {
    color: #ccc;
    font-size: 5.86667vw;
  }
}
.face {
  vertical-align: top;
  width: 6.4vw;
  height: 6.4vw;
  display: inline-block;
  margin-top: 2.66667vw;
  margin-right: 3.2vw;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3.2vw;
  }
}
  .bfs-img {
      background: no-repeat 50%;
      background-size: contain;
      background-color: #e7e7e7;
      -o-object-fit: cover;
      object-fit: cover;
    }
    .launch-app-btn {
      position: relative;
      display: inline-block;
    }
    .m-nav-openapp {
      vertical-align: top;
    }
    .nav-open-app-img {
      width: 19.2vw;
    }
    .nav-open-app-img,
    .openapp {
      margin-left: 2.13333vw;
      height: 6.4vw;
      margin-top: 2.66667vw;
      vertical-align: top;
    }
}
`;
