const Footer = () => {
  const year = new Date().getFullYear();
  return <footer style={{position:"fixed",bottom:"0"}}> {`Copyright © PeopleTechGroup ${2023}`}</footer>;
   // <footer>{`Copyright © PeopleTechGroup ${2023}`}</footer>;
};

export default Footer;
