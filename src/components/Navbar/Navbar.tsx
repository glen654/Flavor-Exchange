import { Link } from 'react-router-dom';
import './NavBar.css';

import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -10,
    top: 7,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

type Total = {
  totalFavorite: number;
};

export default function NavBar({ totalFavorite }: Total) {
  const style = { textDecoration: 'none' };
  return (
    <div className='navbar'>
      <div className='logo'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2388/2388956.png'
          alt='logo'
        />
        <p>YUMMY</p>
      </div>
      <div className='menu'>
        <Link style={style} to='/'>
          <span>HOME</span>
        </Link>
        <Link style={style} to='/recipe'>
          <span>RECIPE</span>
        </Link>
        <StyledBadge badgeContent={totalFavorite} color='secondary'>
          <Link style={style} to='/favorite'>
            <span>FAVORITE</span>
          </Link>
        </StyledBadge>
        <Link style={style} to='/contact'>
          <span>CONTACT</span>
        </Link>
      </div>
    </div>
  );
}