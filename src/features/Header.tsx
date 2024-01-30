import { Navbar, NavbarBrand } from '@nextui-org/react';
import { FaCloud } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar
      maxWidth="full"
      isBordered
    >
      <NavbarBrand>
        <FaCloud size={48} />
        <p className="ml-2 text-lg font-bold">Weather Forecast</p>
      </NavbarBrand>

      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
