import React from "react";
import { Box, Flex, Input, Select } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { filterState, sortState } from "../atoms";

function Search() {
  const [, setFilter] = useRecoilState(filterState);
  const [sort, setSort] = useRecoilState(sortState);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      top={6}
      position={{ xs: "sticky", md: "static" }}
      mt={6}
      p={5}
      shadow="md"
      borderWidth="1px"
      backgroundColor="white"
    >
      <Flex>
        <Input mr={4} onChange={handleChange} placeholder="Search here..." />
        <Select
          minWidth="110px"
          width="25%"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option value="descending">Newest</option>
          <option value="ascending">Oldest</option>
        </Select>
      </Flex>
    </Box>
  );
}

export default Search;
