export class TorresHanoiModel {
    calcular(discos) {
        if (discos <= 0) return "El número de discos debe ser mayor a 0.";
        if (discos > 15) return "El número de discos es muy grande y podría colapsar el navegador. Usa 15 o menos.";

        const result = [];
        this.resolverRecursivo(discos, "Origen", "Destino", "Auxiliar", result);
        return result.join('\n');
    }

    resolverRecursivo(n, origen, destino, auxiliar, resultList) {
        if (n === 1) {
            resultList.push(`Mover disco 1 de ${origen} a ${destino}`);
            return;
        }

        this.resolverRecursivo(n - 1, origen, auxiliar, destino, resultList);
        resultList.push(`Mover disco ${n} de ${origen} a ${destino}`);
        this.resolverRecursivo(n - 1, auxiliar, destino, origen, resultList);
    }
}
