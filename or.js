// criando a rede neural
let synaptic = require('synaptic');
let redeNeural = synaptic.Network;
let camada = synaptic.Layer;

let camadaEntrada = new camada(2);
let camadaOculta = new camada(1);
let camadaSaida = new camada(1);

camadaEntrada.project(camadaOculta);
camadaOculta.project(camadaSaida);

let minhaRedeNeural = new redeNeural({
	input: camadaEntrada,
	hidden: [camadaOculta],
	output: camadaSaida
});

// treinamento da rede - OR
let taxaAprendizado = .1;

for (let i = 0; i < 20000; i++)
{
	// 0,0 => 0
	minhaRedeNeural.activate([0,0]);
	minhaRedeNeural.propagate(taxaAprendizado, [0]);

	// 0,1 => 1
	minhaRedeNeural.activate([0,1]);
	minhaRedeNeural.propagate(taxaAprendizado, [1]);

	// 1,0 => 1
	minhaRedeNeural.activate([1,0]);
	minhaRedeNeural.propagate(taxaAprendizado, [1]);

	// 1,1 => 1
	minhaRedeNeural.activate([1,1]);
	minhaRedeNeural.propagate(taxaAprendizado, [1]);
}

module.exports = {

    resultado: (entradas) => {
    if (minhaRedeNeural.activate(entradas) > 0.9)
        return 1;     
    else
        return 0;
    }
}
