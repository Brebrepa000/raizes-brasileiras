const curiosidades = [
    "O Saci já teve duas pernas nas versões mais antigas.",
    "O Boto é associado a festas e sumiços misteriosos.",
    "A Loira do Banheiro tem origem em um caso real.",
    "O Curupira protege a floresta com seus pés virados.",
    "A Cuca vem do folclore português medieval.",
    "O Homem do Saco aparece em várias culturas.",
]
export function Rodape() {
    return (
        <footer className="bg-black text-white p-4 mt-10">
            <h3 className="text-lg font-semibold mb-2">Curiosidades</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                {curiosidades.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </footer>
    );
}
