export default function Whosomos() {
    return (
        <section
            id="QuemSomos"
            className="mx-8 my-8 flex flex-col lg:mx-36 lg:mb-16 lg:mt-24"
        >
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="m-">
                    <h1 className="font-roboto text-2xl md:text-5xl">Sobre nós</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla imperdiet nibh, eu suscipit mi laoreet eget. Fusce facilisis orci non ante ultricies tincidunt. Pellentesque a lacinia lectus, eu scelerisque velit. Vestibulum elementum augue id feugiat laoreet. Mauris vel metus lacinia, blandit felis in, ultrices nisl.
                    </p>
                </div>
                <img src="/Praxis - Logo - Simples - Colorida 1.png" alt="imagem" width={513} height={400}/>
            </div>
        </section> 
    );
}