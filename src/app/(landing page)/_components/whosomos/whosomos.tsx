export default function Whosomos() {
    return (
        <section
            id="QuemSomos"
            className="mx-8 my-8 flex flex-col lg:mx-36 lg:mb-16 lg:mt-24"
        >
            <div className="flex flex-col items-center justify-arround md:flex-row">
                <div className="w-[516px] h-[400px]">
                    <h1 className="mb-4 text-5xl font-bold">Sobre nós</h1>
                    <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla imperdiet nibh, eu suscipit mi laoreet eget. Fusce facilisis orci non ante ultricies tincidunt. Pellentesque a lacinia lectus, eu scelerisque velit. Vestibulum elementum augue id feugiat laoreet. Mauris vel metus lacinia, blandit felis in, ultrices nisl.
                    </p>
                    <ul className="flex justify-between">
                        <li><h1 className="text-center text-5xl font-bold">55</h1><p>Serviços realizados</p></li>
                        <li><h1 className="text-center text-5xl font-bold">9</h1><p>Anos de história</p></li>
                        <li><h1 className="text-center text-5xl font-bold">23</h1><p>Membros Ativos</p></li>
                    </ul>
                </div>
                <img src="/Praxis - Logo - Simples - Colorida 1.png" alt="imagem" width={513} height={400}/>

            </div>
        </section> 
    );
}