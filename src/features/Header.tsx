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
        <FaCloud size={48} />

        <p className="ml-2 text-lg font-bold">Weather Forecast</p>
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
