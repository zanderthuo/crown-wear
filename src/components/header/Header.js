import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utlils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./HeaderStyles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionDiv to="/shop">
                SHOP
            </OptionDiv>
            <OptionDiv to="/contact">
                CONTACT
            </OptionDiv>
            {
                currentUser ? 
                <OptionDiv onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionDiv>
                :
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropDown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);