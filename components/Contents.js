import Footer from './Footer';

export default function Contents({ data, dataCampus, setDataCampus }) {
  function search(e) {
    setDataCampus({
      ...dataCampus,
      filters: e.target.value,
    });
  }

  return (
    <div className="md:w-3/5 w-full bg-gray-200">
      <div className="w-full my-12">
        <div className="flex flex-col right-0 w-full h-full">
          <h1 className="text-xl font-bold w-11/12 mx-auto text-center mb-10">
            List of Campuses in Indonesia for High School Graduates
          </h1>
          <input
            className="mx-auto rounded w-11/12 border border-main-search shadow-search outline-none px-4 py-2 mb-10 dark:bg-dark-grey"
            type="text"
            placeholder="Search campus by name ..."
            onChange={search}
          />
          {data.length > 0 ? (
            data.map(item => (
              <div
                key={item.id}
                className="mx-auto w-11/12 bg-white mb-6 rounded shadow-content dark:bg-dark-grey transform hover:translate-y-2 transition duration-300"
              >
                <a
                  target="_blank"
                  href={`${item.url}`}
                  className="flex px-5 py-8 cursor-pointer"
                >
                  <div className="w-3/12 md:w-1/6 mr-5 sm:mr-12 md:mr-6">
                    <img
                      src={item.image}
                      className="h-14 md:h-20 mx-auto"
                      loading="lazy"
                    ></img>
                  </div>
                  <div className="w-9/12 md:w-5/6">
                    <h2 className="text-lg font-bold mb-3">{item.name}</h2>
                    <h3 className="dark:text-white text-sm">{item.address}</h3>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">Campus Not Found ... 😥</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
