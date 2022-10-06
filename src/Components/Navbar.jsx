import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content: flex-end;
`;
const Logo = styled.img`
  width: 100px;
  object-fit: contain;
`;
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  height: 24px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="basshub.png" />
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search style={{color:"black", fontSize:32}}/>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
