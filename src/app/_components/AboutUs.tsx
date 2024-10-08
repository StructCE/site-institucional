export default function AboutUs() {
  return (
    <section
      id="QuemSomos"
      className="mx-8 my-8 flex flex-col lg:mx-36 lg:mb-16 lg:mt-24"
    >
      <div className="justify-arround flex flex-col items-center md:flex-row">
        <div className="h-[400px] w-[516px]">
          <h1 className="mb-4 text-5xl font-bold">Sobre nós</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla imperdiet nibh, eu suscipit mi laoreet eget. Fusce
            facilisis orci non ante ultricies tincidunt. Pellentesque a lacinia
            lectus, eu scelerisque velit. Vestibulum elementum augue id feugiat
            laoreet. Mauris vel metus lacinia, blandit felis in, ultrices nisl.
          </p>
          <ul className="flex justify-between">
            <li>
              <h1>55</h1>
              <p>servicos</p>
            </li>
            <li>no </li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
