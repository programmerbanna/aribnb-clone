const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 px-32 text-gray-600 md:grid-cols-4 gap-y-10 py-14 bg-slate-200">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How aribnb works?</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus </p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>This is not a real website</p>
        <p>Pretty awesome clone</p>
        <p>Refferals accepted</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Hasanul Haque Banna</p>
        <p>Pretty awesome clone</p>
        <p>Refferals accepted</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Pretty awesome clone</p>
        <p>Refferals accepted</p>
      </div>
    </div>
  );
};
export default Footer;
