import React from 'react';
import { config, useSpring } from 'react-spring';
import Layout from '../components/layout';
import { AnimatedBox } from '../elements';
import SEO from '../components/SEO';

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="About | Monalazart" desc="Hi. I'm Monalazart" />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Hi. I'm Monalazart</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu justo
          et nisl cursus egestas. Nullam varius enim eu velit congue
          consectetur. Nunc sodales libero sit amet condimentum molestie.
          Suspendisse finibus mollis nisi a sodales. Praesent a arcu dictum,
          placerat quam vel, laoreet neque. Quisque a risus ac velit pretium
          auctor ut sit amet purus. Morbi sollicitudin tempus imperdiet. Ut leo
          mi, imperdiet quis tellus sit amet, semper porttitor purus. Nullam
          porttitor lorem a metus tempor, ut malesuada felis consectetur. Mauris
          vel mattis sem, sed tempus nisi. Pellentesque fringilla, purus sed
          blandit venenatis, odio nibh iaculis turpis, sit amet hendrerit sem
          nunc eget orci. Etiam interdum sodales molestie. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nam nec nibh nec quam tincidunt
          condimentum in ut eros. Nullam placerat ornare lorem, non ullamcorper
          enim ultricies sit amet. Curabitur nulla turpis, lobortis nec sem sit
          amet, dignissim pharetra magna. Nullam ut sapien ultrices, tempus nibh
          a, gravida ante. Maecenas id pharetra mauris. Praesent diam sem,
          accumsan a posuere non, tristique quis nunc. Curabitur nec ex nunc.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices
          laoreet purus, sit amet pellentesque dui dignissim vel. Proin sed sem
          porta, efficitur urna at, congue tellus. Etiam at nisl erat. Etiam
          ullamcorper, dui non lobortis consequat, augue massa pellentesque
          tellus, aliquet dictum metus felis eu metus. Pellentesque dapibus leo
          vitae mauris ornare, at varius libero egestas. Aenean suscipit, enim
          ac lacinia rutrum, dui mauris interdum sapien, quis malesuada metus
          massa nec nisi. Nam lacinia varius turpis, a tempor est aliquet in.
          Pellentesque tristique ultricies diam sed rhoncus. Maecenas iaculis
          sapien sed sem malesuada pulvinar quis non tortor. Nam massa nulla,
          iaculis ut nunc ut, vestibulum ultrices nisi. Nam pretium elementum
          felis eget gravida. Maecenas commodo imperdiet odio id mattis. Nunc
          tincidunt lorem a diam eleifend, vel sagittis purus consequat.
          Vestibulum magna urna, egestas ac mi fermentum, vestibulum finibus
          dolor. In sit amet ante eu purus dapibus lobortis vitae quis ante.
          Vestibulum tincidunt, est et viverra sollicitudin, quam ante convallis
          nisl, non ornare ex velit ac purus. Duis facilisis luctus sodales.
          Vestibulum in elit mollis elit consequat pellentesque id vitae erat.
          Sed id velit ut lorem elementum rhoncus. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Fusce
          fringilla elementum velit sit amet placerat. Nulla aliquet lacinia
          nisi, nec efficitur eros ullamcorper et. Ut eget rhoncus dui. Donec
          finibus lectus et turpis tincidunt tristique sed sed velit. Vestibulum
          et luctus nulla.
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
