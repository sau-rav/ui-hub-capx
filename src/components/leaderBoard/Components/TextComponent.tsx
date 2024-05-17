export const TextComponent = () => {
  return (
    <div className="md:p-8 text-center">
      <div className="tracking-wider mb-6 text-white text-lg md:text-xl font-semibold leading-10 md:leading-12 font-montserrat">
        Top <span className="text-yellow-600">1000 users</span> will get the
        beta access
      </div>
      <div className="text-white text-3xl md:text-6xl font-semibold leading-10 md:leading-12 font-montserrat">
        Want to boost your <span className="text-yellow-600">rank</span>?
      </div>
      <div className="tracking-wider mt-4 text-base md:text-xl font-medium leading-7 font-montserrat text-yellow-600">
        Fill out a survey to be eligible for beta access
      </div>
    </div>
  );
};
