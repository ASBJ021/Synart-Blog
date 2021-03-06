import React from 'react';
import { Nav } from '@components/NavBar';
import { Header } from '@components/Header';
import { Advantages } from '@components/Advantages';
import { Cta } from '@components/Cta';
import { Footer } from '@components/Footer';
import { Product } from '@components/Product';
import { Contact } from '@components/Contact';
import { Hiring } from '@components/Hiring';
import { Test } from '@components/test';
import { Testimonial } from '@components/Testimonial';

function IndexPage() {
  return (
    <div id='top'>
      <Nav />
      <Test />
      <Advantages />

      {/* <Cta /> */}
      <Testimonial />
      {/* <Product /> */}

      <Contact />
      <Hiring />
      <Footer />
    </div>
  );
}

export default IndexPage;
