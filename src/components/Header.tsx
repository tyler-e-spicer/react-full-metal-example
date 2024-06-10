const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav aria-label="Main Navigation">
        {/* Should be in <ul> for accessibility but need to adjust styles */}
        {/* If there were links here, we could include <a> tags */}
        <li>About Us</li>
        <li>Info</li>
        <li>Support Us</li>
      </nav>
    </header>
  );
};

export default Header;
