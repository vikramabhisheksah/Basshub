import styled from "styled-components";
// import { StarOutlineOutlined } from "@material-ui/icons";
// import { MenuItem } from "@material-ui/core";

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;

`
const Filter = styled.div`
    margin:20px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right: 20px;
`
const Select = styled.select`
    padding:10px;
    margin-right: 20px;
`
const Option = styled.option``

const Filters = () => {
    return ( 
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Gray</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Brown</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Purple</Option>
                    <Option>Gold</Option>
                </Select>

                <Select>
                    <Option disabled selected>
                        Rating
                    </Option>
                    <Option>4+</Option>
                    <Option>3+</Option>
                    <Option>2+</Option>
                    <Option>1+</Option>
                </Select>

                <Select>
                    <Option disabled selected>
                        Design
                    </Option>
                    <Option>Over-Ear</Option>
                    <Option>In-Ear</Option>
                    <Option>On-Ear</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Connectivity
                    </Option>
                    <Option>Wired</Option>
                    <Option>Wireless</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Warranty
                    </Option>
                    <Option>1+ Years</Option>
                    <Option>2+ Years</Option>
                    <Option>3+ Years</Option>
                </Select>

            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
     );
}
 
export default Filters;