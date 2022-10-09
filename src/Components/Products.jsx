import { useEffect, useState } from "react";
import styled from "styled-components";
import {products} from '../data';
import Product from "./Product";
import React from "react";
const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

`
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

const Products = ({searchQry,handleCompareClick, compareItems}) => {

    const [filters,setFilters]  =useState({})
    const [sort, setSort] = useState('newest')
    const handleFilters = (e) =>{
        const value = e.target.value;
        if (value.toLowerCase() === e.target.name.toLowerCase()){
            setFilters(
                {
                    ...filters,
                    [e.target.name]:'',
                } 
            );
        }else{
            setFilters({
                ...filters,
                [e.target.name]:value,
            });
        } 
    }
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(()=>{
        setFilteredProducts(
            products.filter((item)=>Object.entries(filters).every(([key,value])=>
                (item[key].toLowerCase()).includes(value.toLowerCase())
            )
            )
        );
    },[filters])

    const handleRating =(e)=>{
        let rating =parseInt((e.target.value).slice(0,1))
        setFilteredProducts(
            products.filter((item)=>parseInt(item.rating) >rating)
        );
    }
    useEffect(()=>{
        if(sort==='newest'){
            setFilteredProducts(products);
        }else if((sort === 'asc')){
            setFilteredProducts((prev)=>
                [...prev].sort((a,b)=>parseInt(a.price) - parseInt(b.price))
            );
        }else {
            setFilteredProducts((prev)=>
                [...prev].sort((a,b)=>parseInt(b.price) - parseInt(a.price))
            );
        }
    },[sort]);

    return ( <>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters} defaultValue='Color'>
                    <Option >
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

                <Select name='rating' onChange={handleRating} defaultValue='Rating'>
                    <Option  >
                        Rating
                    </Option>
                    <Option>4+</Option>
                    <Option>3+</Option>
                    <Option>2+</Option>
                    <Option>1+</Option>
                </Select>

                <Select  name='design' onChange={handleFilters} defaultValue='Design'>
                    <Option  >
                        Design
                    </Option>
                    <Option>Over-Ear</Option>
                    <Option>In-Ear</Option>
                    <Option>On-Ear</Option>
                </Select>
                <Select  name='connectivity' onChange={handleFilters} defaultValue='Connectivity'>
                    <Option  >
                        Connectivity
                    </Option>
                    <Option>Wired</Option>
                    <Option>Wireless</Option>
                </Select>
                <Select name='warranty' onChange={handleFilters} defaultValue='Warranty' >
                    <Option >
                        Warranty
                    </Option>
                    <Option>1 Year</Option>
                    <Option>2 Years</Option>
                    <Option>3 Years</Option>
                </Select>

            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>{setSort(e.target.value)}} defaultValue='Newest'>
                    <Option value='newest'>
                        Newest
                    </Option>
                    <Option value='asc'>Low To High (Price)</Option>
                    <Option value='desc'>High To Low (Price)</Option>
            </Select>
            </Filter>
        </FilterContainer>

        <Container>
            {filteredProducts.map((item)=>{
                if (compareItems.includes(item)) {
                    return(
                        <Product item={item} key={item.id} handleCompareClick={handleCompareClick} selected={false}/>
                    )
                }else {
                    return(
                    <Product item={item} key={item.id} handleCompareClick={handleCompareClick} selected={true}/>
                    )
                }
            }
            )}
        </Container>
        </>
     );
}
 
export default Products;