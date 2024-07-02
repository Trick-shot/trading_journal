import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Box,
} from "@chakra-ui/react";

const BreadCrumb = () => {
  return (
    <Box>
      <Breadcrumb fontWeight="medium" fontSize="sm" pt="3" position="relative">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text position="relative">Dashboard</Text>
    </Box>
  );
};

export default BreadCrumb;
