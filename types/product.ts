export interface IProducto {
    id:            string;
    active:        boolean;
    audit:         Audit[];
    currentStatus: string;
    properties:    Properties;
    status:        Status[];
}

export interface Audit {
    auditType: string;
    date:      number;
    user:      string;
}

export interface Properties {
    brand:                   string;
    bsale:                   boolean;
    category:                string;
    concentration:           string;
    ean:                     string;
    efficiencyPeriod:        string;
    generalIndications:      string;
    isBioequivalent:         boolean;
    isMinimumRequest:        boolean;
    isp:                     string;
    isPharmaceutical:        boolean;
    isRefrigerated:          boolean;
    laboratory:              string;
    name:                    string;
    pharmaceuticalForm:      string;
    photography:             string;
    pregnancyOrLactancy:     string;
    prescription:            string;
    presentation:            string;
    quantityPerPresentation: number;
    referencePrice:          number;
    shortName:               string;
    sku:                     string;
    storageCondition:        string;
    subCategory:             string;
    tags:                    string[];
    therapeuticAction:       string;
    temporaryCategories:     string[];
    composicion:             Composicion[];
    priority:                number;
    activePrinciple:         string;
}

export interface Composicion {
    principio_activo: string;
    concentracion:    string;
    unidad_de_medida: string;
}

export interface Status {
    date:       number;
    statusType: string;
    user:       string;
}