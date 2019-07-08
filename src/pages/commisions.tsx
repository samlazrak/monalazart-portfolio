import React from 'react';
import { config, useSpring } from 'react-spring';
import Layout from '../components/layout';
import { AnimatedBox } from '../elements';
import SEO from '../components/SEO';

const commissions = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="commissions | Monalazart" desc="Commision me!" />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Hi. I'm Monalazart</h1>
        <p>Commision me!</p>
      </AnimatedBox>
    </Layout>
  );
};

export default commissions;
