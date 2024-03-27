import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const colDeviceMode = {
  desktop: 'col-3',
  tablet: 'col-4',
  mobile: 'col-6',
};

export const DeviceTypeContext = createContext(colDeviceMode.desktop);

const MainLayout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [deviceType, setDeviceType] = useState(colDeviceMode.desktop);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1024) {
      setDeviceType(colDeviceMode.desktop);
    } else if (screenWidth >= 768) {
      setDeviceType(colDeviceMode.tablet);
    } else {
      setDeviceType(colDeviceMode.mobile);
    }
  }, [screenWidth]);

  return (
    <div>
      <DeviceTypeContext.Provider value={deviceType}>
        {/* Renderowanie dzieci */}
        <Header />
        {children}
        <Footer />
      </DeviceTypeContext.Provider>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
