import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { FaCloud } from 'react-icons/fa';

export default function Header() {
  const session = useSession();

  return (
    <Navbar
      maxWidth="full"
      isBordered
    >
      <NavbarBrand>
        <FaCloud size={38} />
        {session.data?.user ? (
          <p className="ml-2 hidden text-lg font-bold md:inline">
            Weather Forecast
          </p>
        ) : (
          <p className="ml-2 text-lg font-bold md:inline">Weather Forecast</p>
        )}
      </NavbarBrand>

      {session.data?.user && (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              color="primary"
              variant="solid"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
