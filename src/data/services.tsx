import { Service } from "../types/Service";

// NOTE: For now, I moved away from using the icon parameters; instead, all of the icons are in the assets folder.
// They're identified via names listed in the assets folder index.

// group : {
//   id: "g-block",
//   name: "g-block Resuspension",
// }

export let services: Service[] = [
  {
    id: "gibson-assembly", // PRODUCES DNA; SCREENING REQUIRED
    name: "Gibson Assembly",
    // icon: 'https://drive.google.com/thumbnail?id=1pld9hXCDV9u1MSkMbUBXg4mtvBwMpS1I',
    // icon: 'https://raw.githubusercontent.com/hicsail/damplab-ui/691ace7a9955f4539add30fe641a3dcc82cba31a/public/gibson-assembly.svg',
    icon: "https://drive.google.com/thumbnail?id=1S9H5ydQhe9jyFmRtz09yExg4a8j36-Mp",
    description:
      "Gibson Assembly is a method of joining double-stranded DNA fragments in vitro. It is a rapid, reliable, and scarless method of DNA assembly that can be used to join both sticky and blunt ends, and can be used to assemble multiple DNA fragments simultaneously.",
    parameters: [
      {
        id: "vector",
        name: "Vector",
        description: "",
        type: "file",
        paramType: "input",
        required: true,
      },
      {
        id: "incubation-time",
        name: "Incubation time",
        description: "value in minutes",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: 60,
      },
      {
        id: "incubation-temp",
        name: "Incubation temperature",
        description: "value in degrees celcius",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: 50,
      },
      {
        id: "insert",
        name: "Insert",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
        dynamicAdd: true,
      },
      {
        id: "plasmid-map",
        name: "Full plasmid map",
        description:
          "upload full annotated file of design including vectors, inserts and primers",
        type: "file",
        // file type limited to .gb .fasta .svg maybe sbol in the future
        paramType: "input",
        required: true,
      },

      {
        id: "master-mix",
        name: "Master Mix",
        type: "string",
        paramType: "input",
        required: false,
        defaultValue: "NEB Hifi Assembly",
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: [
      "transformation",
      "ordering-dna-fragments",
      "dna-storage",
      "mutagenesis",
      "mutagenesis-by-inverse-pcr",
      "temperature-gradient-test",
    ],
    categories: [],
    result: {
      // add gibson product result
    },
  },
  {
    id: "m-cloning", // PRODUCES DNA; SCREENING REQUIRED
    name: "Modular Cloning",
    // icon: 'https://cdn-icons-png.flaticon.com/512/1974/1974478.png',
    // icon: 'https://github.com/hicsail/damplab-ui/blob/biosecurity-basics/public/modular-cloning.png?raw=true',
    icon: "https://drive.google.com/thumbnail?id=1d4Wx887qXWI9Z7JZ9JQLFndQUly6E3Gi",
    resultParams: ["forward-primer-flow", "reverse-primer-flow"],
    parameters: [
      {
        id: "vector",
        name: "Vector",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "insert",
        name: "Insert",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "restriction-site-first",
        name: "First Restriction Site",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "restriction-site-second",
        name: "Second Restriction Site",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "antibiotic",
        name: "Antibiotic",
        type: "string",
        workflowId: "antibiotic-workflow",
        paramType: "flow",
        required: true,
      },
      {
        id: "buffer",
        name: "Buffer",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "desired-concentration",
        name: "Desired Concentration",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "ladder",
        name: "Ladder",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "forward-primer-flow-param",
        name: "Forward Primer Flow Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "reverse-primer-flow-param",
        name: "Reverse Primer Flow Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["transformation"],
    categories: ["fluorescence-based-assays"],
    result: {
      id: "m-cloning-product",
      type: "MCloningResult",
    },
    description: "",
  },
  {
    id: "restriction-digest",
    name: "Restriction Digest",
    // icon: 'https://cdn-icons-png.flaticon.com/512/647/647370.png', // go find it
    icon: "https://drive.google.com/thumbnail?id=1wl-Qpt_7NNb7dlzEQwCfmkPvPI3DuPbk",
    parameters: [
      {
        id: "template-dna",
        name: "Template DNA",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "restriction-enzyme",
        name: "Restriction Enzyme",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "restriction-site-first",
        name: "First Restriction Site",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "restriction-site-second",
        name: "Second Restriction Site",
        description: "",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: [
      "clean-up",
      "dna-storage",
      "gel-electrophoresis",
      "restriction-ligation",
    ],
    categories: [],
    description: "",
  },
  {
    id: "restriction-ligation",
    name: "Restriction Ligation",
    // icon: 'https://cdn-icons-png.flaticon.com/512/647/647370.png', // go find it
    icon: "https://drive.google.com/thumbnail?id=1T3ZL5y6GQ0CEk-labTl7NC4J4n9Rca3R",
    description: "",
    parameters: [
      {
        id: "digest-dna",
        name: "Digest DNA",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "dna-ligase",
        name: "DNA Ligase",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: [
      "transformation",
      "ordering-dna-fragment",
      "dna-storage",
      "restriction-digest",
    ],
    categories: [],
  },
  {
    id: "gel-electrophoresis",
    name: "Gel Electrophoresis",
    description:
      "Gel electrophoresis is a laboratory method used to separate mixtures of DNA, RNA, or proteins according to molecular size. In gel electrophoresis, the molecules to be separated are pushed by an electrical field through a gel that contains small pores.",
    // icon: 'https://drive.google.com/uc?id=1lIq60MG4kdCmu4iJrNZikAc60TUlta5M', // find real icon
    icon: "https://drive.google.com/thumbnail?id=1QzCvaWYcw7hwXhxjDbcYcbIvvft6sqv8",
    parameters: [
      {
        id: "gel-type",
        name: "Gel Percentage",
        description: "Provide a number between 0.5% and 3.0%",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: 1,
      },
      {
        id: "sample-length",
        name: "Sample Length",
        description: "Numbers and base pairs 50bp - 10000bp",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "ladder",
        name: "Ladder",
        description: "",
        options: [
          {
            id: "100-bp-ladder",
            name: "100 bp ladder",
          },
          {
            id: "1-kb-ladder",
            name: "1 kb ladder",
          },
          {
            id: "1-kb-plus-ladder",
            name: "1 kb plus ladder",
          },
        ],
        type: "dropdown",
        paramType: "input",
        required: true,
      },
      {
        id: "gel-stain",
        name: "Gel Stain",
        defaultValue: "SYBR safe",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "sample-dye",
        name: "Sample Dye",
        defaultValue: "NEB Gel Loading Dye, Purple (6X)",
        type: "string", // dropdown
        paramType: "input",
        required: false,
      },
      {
        id: "voltage",
        name: "Voltage",
        description: "Numbers and volts 50 - 200",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: 120,
      },
      {
        id: "time",
        name: "Time",
        description: "Provide minutes 10 - 90",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: 45,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    // allowed connections : purified dna from agrose gel extraction, mutagenesis, mutagensis by inverse pcr, perform pcr reaction, perform qpcr reaction, colony pcr,temperatue gradient test, colony PCR
    allowedConnections: [
      "clean-up",
      "mutagenesis",
      "inverse-pcr",
      "pcr",
      "qpcr",
      "colony-pcr",
      "temperature-gradient-test",
      "colony-pcr",
      "gibson-assembly",
    ],
    categories: [],
  },
  {
    id: "dna-gel",
    name: "Purify DNA from Agarose Gel Extraction",
    // icon: 'https://cdn-icons-png.flaticon.com/512/3182/3182554.png',
    icon: "https://drive.google.com/thumbnail?id=11mSlGkU_cesN_RiUbc1xiO6fv9qCzeE6",
    resultParams: ["gel-product"],
    description: "",
    parameters: [
      {
        id: "gel-product-param",
        name: "Gel Product Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["dna-storage", "gel-electrophoresis"],
    categories: ["dna-rna"],
  },
  {
    id: "clean-up",
    name: "Clean Up and Concentrate",
    // icon: 'https://cdn-icons-png.flaticon.com/512/647/647370.png', // go find it
    icon: "https://drive.google.com/thumbnail?id=1ss8znCImp6aCvw8dwrvaiJ4FWRuWr2zd",
    description: "",
    allowedConnections: [],
    categories: [],
    parameters: [
      {
        id: "elution-volume",
        name: "Elution Volume",
        type: "number",
        paramType: "input",
        required: true,
        description: "30-50uL",
      },
      {
        id: "e-buffer",
        name: "elution buffer",
        type: "dropdown",
        paramType: "input",
        required: true,
        options: [
          {
            id: "nuclease-free-water",
            name: "Nuclease Free Water",
          },
          {
            id: "IDTE-BUFFER",
            name: "IDTE BUFFER",
          },
          {
            id: "kit-provided",
            name: "Kit Provided",
          }
        ]
      },
    ],
    // add allowed connections
  },
  {
    id: "eth-perc",
    name: "DNA/RNA Ethanol Precipitation",
    // icon: 'https://drive.google.com/uc?id=1Gdv5OByXeIQET13AowTdKAEKrC-687TH',
    // icon: 'https://drive.google.com/thumbnail?id=1JQ8VUAGGOZa9-dROZfS_thEHcNLvKB7L',
    icon: "https://drive.google.com/thumbnail?id=1bnuf6-ZD79X7ZJ6X6dm26apEh8IU9BX7",
    description: "",
    categories: ["dna-rna"],
    allowedConnections: ["frag-analyzer", "dna-rna-extraction", "gel"],
    parameters: [
      {
        id: "pcr-product-param",
        name: "PCR Product Result",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "eth-perc-product",
      type: "EthPercResult",
      name: "Ethanol Precipitation Result",
    },
  },
  {
    id: "dna-rna-extraction",
    name: "DNA RNA Extraction",
    // icon: 'https://cdn-icons-png.flaticon.com/512/3182/3182554.png',
    icon: "https://drive.google.com/thumbnail?id=11mSlGkU_cesN_RiUbc1xiO6fv9qCzeE6",
    resultParams: [],
    parameters: [
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["qpcr"],
    categories: ["dna-rna"],
    description: "",
  },
  {
    id: "miniprep-gs",
    name: "Miniprep and Glycerol Stock",
    // icon: 'https://drive.google.com/uc?id=1Lam_nDy2e5CwjAK_TU6L1zPAEAeZGRqw',
    icon: "https://drive.google.com/thumbnail?id=1P1kSBdfCJ-ewj_st9ZusnNmSyWQMFG_7",
    description: "",
    resultParams: ["overnight-culture-product"],
    parameters: [
      {
        id: "overnight-culture-product-param",
        name: "Overnight Culture Product Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    categories: ["dna-rna"],
    allowedConnections: ["storage", "seq"],
    result: {
      id: "miniprep-gs-product",
      type: "MiniprepGSResult",
    },
  },
  {
    id: "glyc-storage",
    name: "Glycerol Stock Storage",
    // icon: 'https://cdn-icons-png.flaticon.com/512/4352/4352975.png',
    icon: "https://drive.google.com/thumbnail?id=11k4WLbBrmWvGwvNa30qFK6y2IcnEePQj",
    description: "",
    allowedConnections: [],
    categories: ["pcr-reactions"],
    parameters: [
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "glyc-storage-product",
      type: "GlycStorageResult",
      name: "Glycerol Stock Storage Result",
    },
  },
  {
    id: "rehydrate-primer",
    name: "Rehydrate Primers",
    // icon: 'https://drive.google.com/uc?id=1r3Jk3Y1P-YMmp1CNryY0-5nFCIYLc7Wy',
    icon: "https://drive.google.com/thumbnail?id=14s7ceqCUIrQpJF4dzO62fAq3T4KrDqd7",
    description: "",
    parameters: [
      {
        id: "buffer",
        name: "Buffer",
        type: "select",
        options: ["Nucleus Free water", "TE buffer", "IDTE buffer ", "Other"],
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["pcr"],
    categories: ["dna-assembly-cloning"],
    result: null,
  },
  {
    id: "gene",
    name: "Order Gene Fragment",
    // icon: 'https://drive.google.com/uc?id=1Zj4BohScCf6NNgebjrzDazseNSGN4CI9',
    icon: "https://drive.google.com/thumbnail?id=1rhLeDV-7egQjsgrAcGBxzRhCqNkZNIxK",
    description: "",
    parameters: [
      {
        id: "fragment-sequence",
        name: "Fragment Sequence",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["design-primers"],
    categories: ["dna-assembly-cloning"],
    result: {
      id: "gene-fragment-result",
      type: "GeneFragmentResult",
      text: "DNA suspended in solution to standard concentration",
    },
  },
  {
    id: "design-primers",
    name: "Design and Order Primers",
    // icon: 'https://cdn-icons-png.flaticon.com/512/1087/1087532.png',
    icon: "https://drive.google.com/thumbnail?id=1l6Dfi3oc3KD26-oqEN9jylPw7X6guVZU",
    description: "",
    parameters: [
      {
        id: "target-gene",
        name: "Target Gene",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "forward-primer",
        name: "Forward Primer",
        type: "string",
        paramType: "flow",
        flowId: "forward-primer-flow",
        required: false,
        description: "values between 15-35 base pairs",
      },
      {
        id: "reverse-primer",
        name: "Reverse Primer",
        type: "string",
        flowId: "reverse-primer-flow",
        paramType: "flow",
        required: true,
        description: "values between 15-35 base pairs",
      },
      {
        id: "sequencing-primer",
        name: "Sequencing Primer",
        type: "string",
        paramType: "input",
        required: false,
        description: "values between 18-24 base pairs",
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    categories: ["dna-assembly-cloning"],
    allowedConnections: ["rehydrate-primer"],
    result: null,
  },
  {
    id: "spectro",
    name: "Spectrophotometric Assay",
    icon: "",
    categories: ["next-gen-seq"],
    allowedConnections: ["next-gen-seq", "clean-up"],
    description: "",
    parameters: [
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "spectro-product",
      type: "SpectroResult",
      name: "Spectrophotometric Assay Result",
    },
  },
  {
    id: "sii",
    name: "Sample Indexing Information",
    // icon: 'https://drive.google.com/uc?id=1WV97Xgtp-ZngdSS1A-f8Vk9lP2LAuOpt',
    icon: "https://drive.google.com/thumbnail?id=13yRKvw2299FCjbxxfSwyIhJxinB0SbpM",
    description:
      "Polymerase chain reaction (abbreviated PCR) is a laboratory technique for rapidly producing (amplifying) millions to billions of copies of a specific segment of DNA, which can then be studied in greater detail. PCR involves using short synthetic DNA fragments called primers to select a segment of the genome to be amplified, and then multiple rounds of DNA synthesis to amplify that segment.",
    parameters: [
      {
        id: "param",
        name: "Sample Indexing Template",
        type: "file",
        paramType: "input",
        required: true,
        templateFile: "",
      },
    ],
    allowedConnections: [],
    categories: [],
  },
  {
    id: "pcr",
    name: "PCR",
    // icon: 'https://drive.google.com/uc?id=1WV97Xgtp-ZngdSS1A-f8Vk9lP2LAuOpt',
    icon: "https://drive.google.com/thumbnail?id=13yRKvw2299FCjbxxfSwyIhJxinB0SbpM",
    description:
      "Polymerase chain reaction (abbreviated PCR) is a laboratory technique for rapidly producing (amplifying) millions to billions of copies of a specific segment of DNA, which can then be studied in greater detail. PCR involves using short synthetic DNA fragments called primers to select a segment of the genome to be amplified, and then multiple rounds of DNA synthesis to amplify that segment.",
    parameters: [
      {
        id: "sample-number",
        name: "Total number of samples to be run",
        type: "number",
        paramType: "input",
        required: true,
      },
      //tropical citrus iced energy
      {
        id: "supplied-volume",
        name: "Supplied Volume",
        type: "number",
        paramType: "input",
        required: true,
        description: "in uL",
      },
      {
        id: "sample-dilution",
        name: "Sample Dilution",
        type: "string",
        paramType: "input",
        required: false,
      },
      {
        id: "dilutent",
        name: "Dilutent",
        type: "dropdown",
        paramType: "input",
        required: false,
        options: [
          {
            id: "nuclease-free-water",
            name: "Nuclease Free Water",
          },
          {
            id: "IDTE-BUFFER",
            name: "IDTE BUFFER",
          }
        ],
        
      },
      {
        id: 'final-volume',
        name: 'Final Volume',
        type: 'number',
        paramType: 'input',
        required: true,
        description: 'in uL',
      },
      {
        id: "master-mix-table",
        name: "Master Mix Table",
        type: "table",
        paramType: "input",
        required: false,
        tableData: {
          columns: [
            { header: "Reagent", field: "reagent" },
            { header: "Per Reaction", field: "per_reaction" },
            { header: "Volume (uL)", field: "volume" },
          ],
          rows: [
            {
              reagent: "Master Mix",
              per_reaction: "1x",
              volume: "12.5",
            },
            {
              reagent: "Forward Primer",
              per_reaction: "0.5uM",
              volume: "1",
            },
            {
              reagent: "Reverse Primer",
              per_reaction: "0.5uM",
              volume: "1",
            },
            {
              reagent: "Template DNA",
              per_reaction: "1ng/ul",
              volume: "1",
            },
            {
              reagent: "Nuclease Free Water",
              per_reaction: "to 25uL",
              volume: "to 25uL",
            }
          ],
        },
      },
      {
        id: "thermal-cycler",
        name: "Thermal Cycler Conditions",
        type: "table",
        paramType: "input",
        required: false,
        description: "Provide the thermal cycler conditions in the table",
        tableData: {
          columns: [
            { header: "Stage", field: "stage" },
            { header: "Cycle", field: "cycle" },
            { header: "Temp (C)", field: "temp" },
            { header: "Time", field: "time" },
            { header: "Notes", field: "notes" },
          ],
          rows: [
            {
              stage: "1",
              cycle: "1x",
              temp: 98,
              time: "30 seconds",
              notes: "Initial Denaturation",
            },
            {
              stage: "2",
              cycle: "35x",
              temp: 98,
              time: "10 seconds",
              notes: "DNA Denaturation",
            },
            {
              stage: "",
              cycle: "",
              temp: 65,
              time: "20 seconds",
              notes: "DNA Annealing",
            },
            {
              stage: "",
              cycle: "",
              temp: 72,
              time: "30 seconds",
              notes: "DNA Extension",
            },
            {
              stage: "3",
              cycle: "1x",
              temp: 72,
              time: "5 minutes",
              notes: "Final Extension",
            },
            {
              stage: "4",
              cycle: "1x",
              temp: 4,
              time: "Infinite",
              notes: "Hold",
            },
          ],
        }
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["gel-electrophoresis"],
    categories: ["dna-assembly-cloning"],
    result: {
      id: "pcr-product",
      type: "PCRResult",
      result: {
        id: "pcr-result",
        amount: "number", // this will be equal to reaction volume number
      },
    },
  },

  {
    id: "pcr-clean-up",
    name: "PCR clean up",
    icon: "",
    description: "",
    parameters: [
      {
        id: "elution-volume",
        name: "Elution Volume",
        type: "number",
        paramType: "input",
        required: true,
        description: "30-50uL",
      },
      {
        id: "e-buffer",
        name: "elution buffer",
        type: "dropdown",
        paramType: "input",
        required: true,
        options: [
          {
            id: "nuclease-free-water",
            name: "Nuclease Free Water",
          },
          {
            id: "IDTE-BUFFER",
            name: "IDTE BUFFER",
          },
          {
            id: "kit-provided",
            name: "Kit Provided",
          }
        ]
      },
    ],
    categories: [],
    allowedConnections: [],
  },
  {
    id: "normalization",
    name: "Normalization",
    icon: "",
    description: "",

    parameters: [
      {
        id: "final-volume",
        name: "Final Volume",
        type: "number",
        paramType: "input",
        required: true,
        description: "in uL",
      },
      {
        id: "final-concentration",
        name: "Final Concentration",
        type: "dropdown",
        options: [
          {
            id: "ng-ul",
            name: "ng/ul",
          },
          {
            id: "nM",
            name: "nM",
          },
        ],
        paramType: "input",
        required: true,
      },
      
      {
        id: "dilutent",
        name: "Dilutent",
        type: "dropdown",
        paramType: "input",
        required: false,
        options: [
          {
            id: "nuclease-free-water",
            name: "Nuclease Free Water",
          },
          {
            id: "IDTE-BUFFER",
            name: "IDTE BUFFER",
          }
        ],
      },
    ],
    allowedConnections: [],
    categories: [],
  },
  {
    id: "pooling",
    name: "Pooling",
    icon: "",
    description: "",
    parameters: [
      {
        id: "mass of dna desired in pool",
        name: "Mass of DNA Desired in Pool",
        type: "string",
        paramType: "input",
        required: true,
        description: "in ng or nM",
      },
      // exlude concentration? and if yes, enter threshold
      {
        id: "exclude-concentration-threshold",
        name: "Exclude Concentration Threshold",
        type: "string",
        paramType: "input",
        required: false,
        description: "Option to exclude samples below a certain concentration",
      },
      {
        id: 'cap-sample-volume',
        name: 'Cap Sample Volume',
        type: 'number',
        paramType: 'input',
        required: false,
        description: 'in uL, option to cap sample volume added to pool to a certain volume',
      },
      {
        id: "dilute-final-pool",
        name: "Dilute Final Pool to Other Concentration",
        type: "number",
        paramType: "input",
        required: false,
        description: "in nM",
      },
      {
        id: "dilutent",
        name: "Dilutent",
        type: "dropdown",
        paramType: "input",
        required: false,
        options: [
          {
            id: "nuclease-free-water",
            name: "Nuclease Free Water",
          },
          {
            id: "IDTE-BUFFER",
            name: "IDTE BUFFER",
          }
        ],
      },
    ],
    allowedConnections: ['frag-analyzer'],
    categories: [],
  },

  {
    id: "qpcr",
    name: "qPCR",
    // icon: 'https://drive.google.com/uc?id=1WV97Xgtp-ZngdSS1A-f8Vk9lP2LAuOpt',
    icon: "https://drive.google.com/thumbnail?id=13yRKvw2299FCjbxxfSwyIhJxinB0SbpM",
    description: "",
    parameters: [
      {
        id: "melting-temp",
        name: "Melting Temperature",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "cycle-time",
        name: "Cycle Time",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "reaction-volume",
        name: "Reaction Volume",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "forward-primer",
        name: "Forward Primer",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "reverse-primer",
        name: "Reverse Primer",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "template-dna",
        name: "Template DNA",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "polymerase",
        name: "Polymerase",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "dpn1-digest",
        name: "Dpn1 Digest",
        description: "",
        options: [
          {
            id: "yes",
            name: "Yes",
          },
          {
            id: "no",
            name: "No",
          },
        ],
        type: "dropdown",
        paramType: "input",
        required: true,
      },
    ],
    allowedConnections: ["gel-electrophoresis"],
    categories: ["dna-assembly-cloning"],
    result: {
      id: "qpcr-product",
      type: "qPCRResult",
      result: {
        id: "qpcr-result",
        amount: "number", // this will be equal to reaction volume number
      },
    },
  },
  {
    id: "seq",
    name: "Send Sample to Sequencing",
    // icon: 'https://drive.google.com/uc?id=1KwchGg3_H3REm_jv5vf6IIUDmTupIPVs',
    icon: "https://drive.google.com/thumbnail?id=15LMIjlt73eu-wI5VfTJcXEybfuWRm8bd",
    // Name of item, type (plasmid, purified PCR, unpurified PCR, cosmid, BAC, Genomic DNA, Colony, RCA), size (kb), concentration (ng/ul), premixed? (yes/no), sequencing primer (with name), concentration of sequencing primer (uM)
    description: "",
    parameters: [
      {
        id: "sample",
        name: "Sample Type",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "plasmid-map",
        name: "Full plasmid map",
        description:
          "upload full annotated file of design including vectors, inserts and primers",
        type: "file",
        // file type limited to .gb .fasta .svg maybe sbol in the future
        paramType: "input",
        required: true,
      },
      {
        id: "",
        name: "Sequencing type",
        type: "dropdown",
        options: [
          {
            id: "sanger",
            name: "Sanger",
          },
          {
            id: "whole-plasmid",
            name: "Whole plasmid",
          },
        ],
        paramType: "input",
        required: true,
        description: "",
      },
      // result param from design and order primer comes here, if there is none it defaults to whole plasmid,
      {
        id: "plasmid",
        name: "Plasmid Name",
        type: "string",
        paramType: "flow",
        flowId: "plasmid-flow",
        required: true,
      },
      {
        id: "seq-prim",
        name: "Sequencing primer",
        type: "string",
        paramType: "input",
        required: false,
       
      },
      {
        id: "primaer-concentration",
        name: "Primer Concentration",
        type: "number",
        paramType: "input",
        required: false,
        defaultValue: "5uM",
        description: "In between 5-25 uM",
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],

    allowedConnections: ["gene", "storage", "design-primers"],
    categories: ["dna-rna"],
    // need to think about to capture result that comes from a file they send
    result: null,
  },
  {
    id: "next-gen-seq",
    name: "Next Generation Sequencing",
    // icon: 'https://drive.google.com/uc?id=1oiZLiBOUJqFPI_46_YCtk9mrYNkkfFLL',
    icon: "https://drive.google.com/thumbnail?id=1_t3YCiglSyjYzdJMLgOSUex9eu0sM2Se",
    description: "",
    categories: ["next-gen-seq"],
    allowedConnections: ["frag-analyzer"],
    parameters: [
      {
        id: "library-prep-product",
        name: "Library Prep Result",
        type: "string",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },

      // add more
    ],
    result: {
      id: "seq-product",
      type: "SeqResult",
      name: "NGS Sequencing Result",
    },
  },
  {
    id: "cell-culture-induction",
    name: "Cell Culture Induction and Selection",
    // icon: 'https://drive.google.com/uc?id=1f7fX9OQzpzq6q66p6Rn-ednSCQysE14o', // Cell Culture.svg
    icon: "https://drive.google.com/thumbnail?id=1IgSzmw5D4RpweYeWl0jnLCw5XWqOgCcp",
    description: "",
    categories: ["culturing-media"],
    allowedConnections: ["plate-reader", "storage", "flow-cytometry"],
    parameters: [
      {
        id: "inducer",
        name: "Inducer",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "induction-culture",
        name: "Overnight Bacterial Culture",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "induced-sample",
      type: "InducedSampleResult",
      name: "Induced Bacterial Culture Result",
    },
  },
  {
    id: "cell-lysate",
    name: "Cell Lysate Production",
    // icon: 'https://drive.google.com/uc?id=13aVzjB_unTVcr-3GsNLJeEDy63LE-yZ4', // Cell Lysate Production.svg
    icon: "https://drive.google.com/thumbnail?id=1cym6zJ4AwCNtES8KCrTdj2PvCTuqdwmX",
    description: "",
    categories: ["culturing-media"],
    allowedConnections: ["plate-reader", "storage", "cell-culture-induction"],
    parameters: [
      {
        id: "lysate-bacterial-culture",
        name: "Large Volume Bacterial Culture",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "cell-lysate-product",
      type: "CellLysateResult",
      name: "Cell Lysate Result",
    },
  },
  {
    id: "protein-production",
    name: "Protein Production and Purification from Cell Lysate",
    // icon: 'https://drive.google.com/uc?id=1r0uMBqqugBe-KqkdZacY5w1RqyL5ijh5', // Protein Production.svg
    icon: "https://drive.google.com/thumbnail?id=1joahDEPtnzTGs5wGOMu2TNc32ld9J0WL",
    description: "",
    categories: ["culturing-media"],
    allowedConnections: [
      "plate-reader",
      "storage",
      "cell-lysate",
      "cell-culture-induction",
    ],
    parameters: [
      {
        id: "protein-bacterial-culture",
        name: "Large Volume Bacterial Culture",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "lysate-protein",
      type: "LysateProteinResult",
      name: "Cell Lysate Containing Protein",
    },
  },
  {
    id: "transformation",
    name: "Transformation",
    // icon: 'https://drive.google.com/uc?id=1JRRNNrprfVjobLCnNRUUvCcRiJ0TkVI0',
    icon: "https://drive.google.com/thumbnail?id=1KGDyxffZiehRFKSaPwaZWFjixXHrA84P",
    description: "Transform cells with DNA",
    resultParams: ["m-cloning-product", "antibiotic-workflow"],
    parameters: [
      {
        id: "m-cloning-product-param",
        name: "MCloning Product Result",
        description: "Result from Gibson Assembly",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "antibiotic-workflow-product-param",
        name: "Antibiotic Workflow Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "competent-cells",
        name: "Competent Cells",
        type: "dropdown",
        paramType: "input",
        required: true,
        description: "select from dropdown, default is DH5alpha",
        options: [
          {
            id: "DH5alpha",
            name: "DH5alpha",
          },
          {
            id: "DH10B",
            name: "DH10B",
          },
          {
            id: "other",
            name: "Other",
          },
        ],
      },
      {
        id: "recovery-media",
        name: "Recovery Media",
        type: "dropdown",
        paramType: "input",
        required: true,
        description: "select from dropdown, default is SOC",
        // <- other option is LBE <- capture amount as well default is 10x reaction volume 198mL, range is 50-900'
        options: [
          {
            id: "SOC",
            name: "SOC",
          },
          {
            id: "LB",
            name: "LB",
          },
          {
            id: "TB",
            name: "TB",
          },
        ],
        defaultValue: "SOC",
      },
      {
        id: "recovery-time",
        name: "Recovery Time",
        type: "number",
        paramType: "input",
        required: true,
        description: "default is 1 hour, range is 0.5 - 2 hours",
      },
      {
        id: "recovery-incubation-temp",
        name: "Recovery Incubation Temperature",
        type: "number",
        paramType: "input",
        required: true,
        description:
          "default is 37 degrees C and 250RPM, range is 30 - 42 degrees C",
      },
      {
        id: "antibiotic",
        name: "Antibiotic",
        type: "dropdown",
        // molly to send over email
        paramType: "input",
        required: true,
        description: "anti biotic for agar plate",
        dynamicAdd: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: [
      "overnight-culture",
      "plate-storage",
      "overnight-culture",
    ],
    categories: ["fluorescence-based-assays"],
    result: {
      id: "transformation-product",
      type: "TransformationResult",
    },
  },
  {
    id: "overnight-culture",
    name: "Overnight Inoculum",
    // icon: 'https://drive.google.com/uc?id=1Wckp8P3GwvJw-7_tb1DevtSVCFPaevcG',
    icon: "https://drive.google.com/thumbnail?id=1XOCFkGHslF5T5EEOHygIR9YaKBKkMoYp",
    description: "Grow cells overnight",
    resultParams: ["transformation-product", "antibiotic-workflow"],
    parameters: [
      {
        id: "desired-volume",
        name: "Desired Volume",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "repl",
        name: "replicates",
        type: "number",
        paramType: "input",
        required: false,
        description: "Default 1",
      },
      {
        id: "transformation-product-param",
        name: "Transformation Product Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "antibiotic-workflow-product-param",
        name: "Antibiotic Workflow Result",
        type: "boolean",
        paramType: "result",
        required: true,
      },
      {
        id: "growth-media",
        name: "Growth Media",
        type: "string",
        paramType: "input",
        required: true,
        description: "",
        // default is LBE <- other option is SOC or TB or M9 <- capture amount as well default is 10x reaction volume 198mL, range is 50-900
        options: [
          {
            id: "LBE",
            name: "LBE",
          },
          {
            id: "SOC",
            name: "SOC",
          },
          {
            id: "TB",
            name: "TB",
          },
          {
            id: "M9",
            name: "M9",
          },
        ],
        defaultValue: "LB",
      },
      {
        id: "growth-tilt",
        name: "Growth Tilt",
        type: "number",
        paramType: "input",
        required: false,
        description: "0-45 degrees",
      },
      {
        id: "antibiotic",
        name: "Antibiotic",
        type: "dropdown",
        options: [
          {
            id: 'test',
            name: 'test'
          }
        ],
        paramType: "input",
        required: true,
        description: "anti biotic for agar plate",
        dynamicAdd: true,
      },
      {
        id: "rpm",
        name: "RPM",
        type: "number",
        paramType: "input",
        required: true,
        description: "default is 250RPM, range is 50-300",
      },
      {
        id: "growth-temp",
        name: "Growth Temperature",
        type: "number",
        paramType: "input",
        required: true,
        description: "default is 37 degrees C, range is 30 - 42 degrees C",
      },
      {
        id: "growth-time",
        name: "Growth Time",
        type: "number",
        paramType: "input",
        required: true,
        description: "default is 16 hours, range is 10 - 48 hours",
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    allowedConnections: ["miniprep", "storage", "miniprep-gs"],
    categories: ["culturing-media"],
    result: {
      id: "overnight-culture-product",
      type: "OvernightCultureResult",
    },
  },
  {
    id: "dna-storage",
    name: "Plasmid, DNA fragment, or oligo storage",
    // icon: 'https://cdn-icons-png.flaticon.com/512/647/647370.png', // go find it
    icon: "https://drive.google.com/thumbnail?id=1vW2wN9f41ZNgP2zYOm1AJDgIud8WYAGR",
    description: "",
    parameters: [
      {
        id: "dna-types",
        name: "Type",
        type: "ENUM",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    categories: ["dna-assembly-cloning"],
    // add allowed connections
    allowedConnections: [],
  },
  {
    id: "storage",
    name: "Overnight Innoculums of Bacteria Cell Culture Storage",
    // icon: 'https://drive.google.com/uc?id=1DfUSEFooEi-C4FPUD6Snu-c-tPLzppwp', // Storage Bacteria.svg
    icon: "https://drive.google.com/thumbnail?id=1XOCFkGHslF5T5EEOHygIR9YaKBKkMoYp",
    description: "",
    categories: ["storage"],
    allowedConnections: ["overnight-culture"],
    parameters: [
      {
        id: "overnight-culture",
        name: "Overnight Bacterial Culture",
        type: "string",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "overnight-culture-storage",
      type: "OvernightCultureStorageResult",
      name: "Overnight Bacterial Culture Storage Result",
    },
  },
  {
    id: "frag-analyzer",
    name: "Fragment Analyzer",
    // icon: 'https://drive.google.com/uc?id=1L2wX2D0Vhlq6UpU3VnA4FGKaDq259LXk',
    icon: "https://drive.google.com/thumbnail?id=1wiL_-GBWMi7M5hty9CWcf4mbmJhW4k8E",
    description: "",
    categories: ["next-gen-seq", "dna-rna"],
    allowedConnections: ["seq", "eth-perc"],
    parameters: [
      {
        id: "concentration",
        name: "Concentration",
        type: "string",
        paramType: "input",
        required: true,
      },
      {
        id: "num-samples",
        name: "Number of Samples",
        type: "number",
        paramType: "input",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "frag-analyzer-product",
      type: "FragAnalyzerResult",
      name: "Fragment Analyzer Result",
    },
  },
  {
    id: "mRNA-enrichment", // Removed temporarily from database/upload-mutation.gql; may re-add in future...
    name: "mRNA Enrichment",
    // icon: 'https://drive.google.com/uc?id=15Dg7u9OWhZjVQ8lGYszIYDo7FcTQkkOW',
    icon: "https://drive.google.com/thumbnail?id=1l4AoRs0ieidpFy566BFmOmUOJnIcT5hj",
    categories: ["next-gen-seq"],
    description: "",
    allowedConnections: ["dna-rna-extraction", "frag-analyzer"],
    parameters: [
      {
        id: "frag-analyzer-product",
        name: "Fragment Analyzer Result",
        type: "string",
        paramType: "result",
        required: true,
      },
      {
        id: "additional-notes",
        name: "Additional Notes",
        type: "string",
        paramType: "input",
        required: false,
      },
    ],
    result: {
      id: "mRNA-enrichment-product",
      type: "MRnaEnrichmentResult",
      name: "mRNA Enrichment Result",
    },
  },
];
