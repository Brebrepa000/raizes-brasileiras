import { UseState } from 'react' {
    function Relatoform({Addform} ) {
        const [ nome, setNome ] = useState('');
        const { relato, setRelato } = useState('');

        const handleSubmit = (e) => {
            e.preventDefault ();

            if (relato.trim() === '') return;
            const novoRelato = {
                nome: nome || 'Anônimo',
                texto: relato,
                data: new Date().toLocaleString(),
            };

            onAddRelato(novoRelato);
            setNome('');
            setRelato('');
        };

        return (
            <form onSubmit={handleSubmit} className='p-4 bg-white rounded shadow max-w-md mx-auto mt-6'
        )
    }
}