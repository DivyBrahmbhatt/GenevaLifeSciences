import { db } from "@workspace/db";
import { categoriesTable, productsTable } from "@workspace/db/schema";

const categories = [
  { name: "Prefilled Syringes", slug: "prefilled-syringes", description: "Ready-to-use prefilled syringes for precise dosing across therapeutic areas." },
  { name: "Ophthalmic (Eye) Preparations", slug: "ophthalmic", description: "Sterile formulations for ocular conditions including eye drops, gels, and ointments." },
  { name: "Otic (Ear) Preparations", slug: "otic", description: "Specialized ear drops and solutions for treating ear infections and conditions." },
  { name: "Cephalosporin", slug: "cephalosporin", description: "Beta-lactam antibiotics for a broad range of bacterial infections." },
  { name: "Ointments & Creams", slug: "ointments-creams", description: "Topical formulations for skin conditions, inflammation, and infection management." },
  { name: "Cream", slug: "cream", description: "Water-based topical preparations for dermatological and cosmetic applications." },
  { name: "Mouthwash", slug: "mouthwash", description: "Antiseptic and therapeutic oral rinses for oral hygiene and health." },
  { name: "Toothpaste", slug: "toothpaste", description: "Fluoride and medicated toothpastes for dental care and oral protection." },
  { name: "Lotion", slug: "lotion", description: "Liquid-based topical preparations for moisturizing, soothing, and treating skin." },
  { name: "Musculoskeletal Disorders", slug: "musculoskeletal", description: "Medications targeting muscle, joint, and skeletal disorders including pain management." },
  { name: "Neuromuscular Blockade", slug: "neuromuscular-blockade", description: "Agents used in anesthesia and critical care for neuromuscular blockade." },
  { name: "Endocrine System", slug: "endocrine", description: "Hormonal and endocrine modulators for thyroid, diabetes, and metabolic conditions." },
  { name: "Respiratory", slug: "respiratory", description: "Bronchodilators, corticosteroids, and mucolytics for respiratory disorders." },
  { name: "Antimalarial", slug: "antimalarial", description: "Prophylaxis and treatment agents for malaria and related parasitic infections." },
];

type CategoryRow = { id: number; slug: string };

const productsByCategorySlug: Record<string, Array<{
  name: string;
  description: string;
  specifications?: string;
  applications?: string;
  genericName?: string;
  strength?: string;
  containerType?: string;
  isPrefillSyringe?: boolean;
}>> = {
  "prefilled-syringes": [
    {
      name: "Enoxaparin Sodium 40mg/0.4mL Prefilled Syringe",
      genericName: "Enoxaparin Sodium",
      strength: "40mg/0.4mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "A low molecular weight heparin used for prevention and treatment of deep vein thrombosis (DVT) and pulmonary embolism.",
      specifications: "Each syringe contains Enoxaparin Sodium 40mg in 0.4mL solution. pH: 5.5–7.5. Sterile, preservative-free.",
      applications: "DVT prophylaxis post-surgery, treatment of acute coronary syndromes, prevention of clotting in dialysis circuits.",
    },
    {
      name: "Enoxaparin Sodium 60mg/0.6mL Prefilled Syringe",
      genericName: "Enoxaparin Sodium",
      strength: "60mg/0.6mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Higher-dose low molecular weight heparin for treatment of established DVT and pulmonary embolism.",
      specifications: "Each syringe contains Enoxaparin Sodium 60mg in 0.6mL solution. Sterile, single-use.",
      applications: "Treatment of DVT with or without pulmonary embolism, unstable angina management.",
    },
    {
      name: "Enoxaparin Sodium 80mg/0.8mL Prefilled Syringe",
      genericName: "Enoxaparin Sodium",
      strength: "80mg/0.8mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "High-dose enoxaparin for acute management of thrombotic conditions.",
      specifications: "Each syringe contains Enoxaparin Sodium 80mg in 0.8mL. Single-dose, sterile.",
      applications: "Treatment of acute coronary syndrome, DVT management.",
    },
    {
      name: "Enoxaparin Sodium 100mg/1mL Prefilled Syringe",
      genericName: "Enoxaparin Sodium",
      strength: "100mg/1mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Full-dose low molecular weight heparin for comprehensive anticoagulant therapy.",
      specifications: "Each syringe contains Enoxaparin Sodium 100mg in 1mL. Sterile, preservative-free.",
      applications: "Anticoagulation during pregnancy, acute DVT treatment, ACS management.",
    },
    {
      name: "Methotrexate 7.5mg/0.15mL Prefilled Syringe",
      genericName: "Methotrexate",
      strength: "7.5mg/0.15mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Disease-modifying antirheumatic drug (DMARD) for rheumatoid arthritis and psoriasis.",
      specifications: "Each syringe contains Methotrexate 7.5mg. Sterile aqueous solution.",
      applications: "Rheumatoid arthritis, juvenile idiopathic arthritis, plaque psoriasis.",
    },
    {
      name: "Methotrexate 15mg/0.3mL Prefilled Syringe",
      genericName: "Methotrexate",
      strength: "15mg/0.3mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Moderate-dose methotrexate for DMARD therapy in autoimmune conditions.",
      specifications: "Each syringe contains Methotrexate 15mg in 0.3mL. Sterile single-use.",
      applications: "Rheumatoid arthritis dose escalation, psoriatic arthritis.",
    },
    {
      name: "Adalimumab 40mg/0.8mL Prefilled Syringe",
      genericName: "Adalimumab",
      strength: "40mg/0.8mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "TNF-alpha inhibitor biologic for autoimmune and inflammatory conditions.",
      specifications: "Each syringe contains Adalimumab 40mg in 0.8mL. pH: 5.2. Refrigerated storage required.",
      applications: "Rheumatoid arthritis, plaque psoriasis, Crohn's disease, ankylosing spondylitis.",
    },
    {
      name: "Erythropoietin 4000 IU/mL Prefilled Syringe",
      genericName: "Erythropoietin",
      strength: "4000 IU/mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Recombinant erythropoietin for treatment of anemia associated with chronic kidney disease.",
      specifications: "Each syringe contains Erythropoietin 4000 IU/mL. Sterile, single-use pre-filled.",
      applications: "Anemia of chronic kidney disease, chemotherapy-induced anemia.",
    },
    {
      name: "Insulin Glargine 100 IU/mL Prefilled Syringe",
      genericName: "Insulin Glargine",
      strength: "100 IU/mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Long-acting insulin analog for once-daily basal insulin therapy in diabetes mellitus.",
      specifications: "Each syringe contains Insulin Glargine 100 IU/mL. pH: 4.0. Clear colorless solution.",
      applications: "Type 1 diabetes mellitus, Type 2 diabetes requiring basal insulin.",
    },
    {
      name: "Dalteparin 5000 IU Prefilled Syringe",
      genericName: "Dalteparin Sodium",
      strength: "5000 IU/0.2mL",
      containerType: "Prefilled Syringe",
      isPrefillSyringe: true,
      description: "Low molecular weight heparin for DVT prophylaxis in surgical and medical patients.",
      specifications: "Each syringe contains Dalteparin Sodium 5000 anti-Xa IU in 0.2mL. Sterile.",
      applications: "DVT prophylaxis, extended VTE treatment in cancer patients.",
    },
  ],
  "ophthalmic": [
    {
      name: "Timolol Maleate 0.5% Eye Drops",
      description: "Beta-blocker ophthalmic solution for reduction of intraocular pressure in glaucoma.",
      specifications: "Each mL contains Timolol Maleate equivalent to Timolol 5mg. Sterile isotonic solution.",
      applications: "Open-angle glaucoma, ocular hypertension management.",
    },
    {
      name: "Ciprofloxacin 0.3% Ophthalmic Solution",
      description: "Fluoroquinolone antibiotic eye drops for bacterial conjunctivitis and corneal ulcers.",
      specifications: "Each mL contains Ciprofloxacin HCl 3mg. Sterile, buffered ophthalmic solution.",
      applications: "Bacterial conjunctivitis, corneal ulcers caused by susceptible organisms.",
    },
    {
      name: "Dexamethasone 0.1% Ophthalmic Suspension",
      description: "Corticosteroid eye drops for ocular inflammatory conditions.",
      specifications: "Contains Dexamethasone 0.1% w/v. Sterile ophthalmic suspension.",
      applications: "Post-operative ocular inflammation, allergic conjunctivitis, uveitis.",
    },
    {
      name: "Latanoprost 0.005% Eye Drops",
      description: "Prostaglandin analog for first-line treatment of open-angle glaucoma.",
      specifications: "Contains Latanoprost 0.005% w/v. Requires refrigeration before opening.",
      applications: "Open-angle glaucoma, ocular hypertension.",
    },
  ],
  "otic": [
    {
      name: "Ciprofloxacin 0.2% Otic Solution",
      description: "Antibacterial ear drops for treatment of acute otitis externa and chronic suppurative otitis media.",
      specifications: "Contains Ciprofloxacin HCl 2mg/mL. Sterile otic solution, pH 4.5–5.0.",
      applications: "Acute otitis externa, chronic suppurative otitis media with perforated tympanic membrane.",
    },
    {
      name: "Clotrimazole 1% Ear Drops",
      description: "Antifungal ear drops for otomycosis and fungal outer ear infections.",
      specifications: "Contains Clotrimazole 1% w/v in propylene glycol base. Sterile.",
      applications: "Otomycosis (fungal otitis externa), mixed fungal/bacterial ear infections.",
    },
    {
      name: "Acetic Acid 2% Otic Solution",
      description: "Acidifying agent for treatment of superficial infections of the external auditory canal.",
      specifications: "Contains Acetic Acid 2% w/v. Sterile otic solution.",
      applications: "Otitis externa caused by Pseudomonas aeruginosa, post-swim ear prevention.",
    },
  ],
  "cephalosporin": [
    {
      name: "Cefuroxime 750mg Injection",
      description: "Second-generation cephalosporin antibiotic for moderate to severe bacterial infections.",
      specifications: "Each vial contains sterile Cefuroxime Sodium 750mg. Reconstitute with 5mL WFI.",
      applications: "Lower respiratory tract infections, UTIs, skin/soft tissue infections, surgical prophylaxis.",
    },
    {
      name: "Ceftriaxone 1g Injection",
      description: "Third-generation cephalosporin with broad-spectrum activity for serious infections.",
      specifications: "Each vial contains Ceftriaxone Sodium 1g. Reconstitute with 10mL NS or D5W.",
      applications: "Meningitis, septicemia, complicated UTI, intra-abdominal infections, gonorrhea.",
    },
    {
      name: "Cefoperazone-Sulbactam 1.5g Injection",
      description: "Beta-lactam/beta-lactamase inhibitor combination for resistant gram-negative infections.",
      specifications: "Cefoperazone 1g + Sulbactam 0.5g per vial. Extended spectrum activity.",
      applications: "Hospital-acquired pneumonia, complicated intra-abdominal infections, febrile neutropenia.",
    },
    {
      name: "Cefepime 1g Injection",
      description: "Fourth-generation cephalosporin with activity against Pseudomonas aeruginosa.",
      specifications: "Each vial contains Cefepime HCl equivalent to 1g Cefepime. Sterile powder.",
      applications: "Febrile neutropenia, nosocomial pneumonia, complicated UTI, bacteremia.",
    },
  ],
  "ointments-creams": [
    {
      name: "Mupirocin 2% Ointment",
      description: "Topical antibiotic ointment for primary and secondary skin infections.",
      specifications: "Contains Mupirocin 2% w/w in a polyethylene glycol base. 5g, 15g, 30g tubes.",
      applications: "Impetigo, folliculitis, wound infections, nasal decolonization of MRSA.",
    },
    {
      name: "Betamethasone + Clotrimazole Cream",
      description: "Combined corticosteroid and antifungal cream for inflammatory fungal skin conditions.",
      specifications: "Betamethasone Valerate 0.1% + Clotrimazole 1% w/w. Cream base.",
      applications: "Tinea infections with inflammation, cutaneous candidiasis, seborrheic dermatitis.",
    },
    {
      name: "Silver Sulfadiazine 1% Cream",
      description: "Broad-spectrum antimicrobial cream specifically formulated for burn wound management.",
      specifications: "Contains Silver Sulfadiazine 1% w/w in a water-miscible cream base.",
      applications: "Prevention and treatment of wound sepsis in burns, chronic ulcers.",
    },
  ],
  "cream": [
    {
      name: "Hydroquinone 2% Cream",
      description: "Skin-lightening cream for treatment of hyperpigmentation, melasma, and dark spots.",
      specifications: "Contains Hydroquinone 2% in a moisturizing cream base with SPF.",
      applications: "Melasma, post-inflammatory hyperpigmentation, freckles, age spots.",
    },
    {
      name: "Tretinoin 0.025% Cream",
      description: "Vitamin A derivative for acne and anti-aging skin treatment.",
      specifications: "Contains Tretinoin 0.025% w/w in a cream base. Store below 25°C.",
      applications: "Acne vulgaris, photoaging, fine wrinkles, skin texture improvement.",
    },
    {
      name: "Calamine Lotion/Cream",
      description: "Soothing topical preparation for itching, rashes, and minor skin irritations.",
      specifications: "Contains Calamine 8% and Zinc Oxide 8% in a cream base.",
      applications: "Chickenpox, contact dermatitis, insect bites, sunburn relief.",
    },
  ],
  "mouthwash": [
    {
      name: "Chlorhexidine Gluconate 0.2% Mouthwash",
      description: "Antiseptic oral rinse for gingivitis prevention and periodontal disease management.",
      specifications: "Contains Chlorhexidine Gluconate 0.2% w/v. Available in 100mL and 300mL bottles.",
      applications: "Plaque control, gingivitis prevention, post-surgical oral hygiene, aphthous ulcers.",
    },
    {
      name: "Povidone-Iodine 0.5% Mouthwash",
      description: "Broad-spectrum antiseptic mouthwash for oral infections and throat decontamination.",
      specifications: "Contains Povidone-Iodine 0.5% w/v. Ready-to-use solution.",
      applications: "Oral infections, pharyngitis, pre- and post-operative oral hygiene.",
    },
    {
      name: "Hydrogen Peroxide 1.5% Mouthwash",
      description: "Oxygenating oral rinse for whitening and oral wound care.",
      specifications: "Contains Hydrogen Peroxide 1.5% v/v. Mint flavored.",
      applications: "Canker sores, minor mouth irritations, oral hygiene enhancement.",
    },
  ],
  "toothpaste": [
    {
      name: "Sodium Fluoride 1000ppm Toothpaste",
      description: "Standard fluoride toothpaste for daily cavity prevention and enamel strengthening.",
      specifications: "Contains Sodium Fluoride providing 1000ppm fluoride. Available in 50g and 100g.",
      applications: "Daily dental care, cavity prevention, enamel remineralization.",
    },
    {
      name: "Triclosan + Fluoride Toothpaste",
      description: "Antibacterial fluoride toothpaste for gum health and plaque control.",
      specifications: "Triclosan 0.3% + Sodium Monofluorophosphate providing 1000ppm fluoride.",
      applications: "Gum disease prevention, plaque reduction, anti-gingivitis therapy.",
    },
    {
      name: "Desensitizing Toothpaste (Potassium Nitrate 5%)",
      description: "Clinically proven toothpaste for relief of dental hypersensitivity.",
      specifications: "Contains Potassium Nitrate 5% and Sodium Fluoride 1450ppm.",
      applications: "Dentinal hypersensitivity, sensitive teeth, post-whitening sensitivity.",
    },
  ],
  "lotion": [
    {
      name: "Lacto Calamine Lotion",
      description: "Skin-soothing and oil-control lotion for combination and oily skin types.",
      specifications: "Contains Calamine, Kaolin, Zinc Oxide, and Glycerine in a light lotion base.",
      applications: "Oily skin management, skin pore minimization, sunburn relief.",
    },
    {
      name: "Ammonium Lactate 12% Lotion",
      description: "Alpha-hydroxy acid lotion for treatment of dry, scaly skin conditions.",
      specifications: "Contains Ammonium Lactate 12% w/w providing lactic acid in a lotion base.",
      applications: "Ichthyosis vulgaris, xerosis, dry scaly skin, keratosis pilaris.",
    },
    {
      name: "Permethrin 5% Lotion",
      description: "Topical antiparasitic lotion for scabies treatment.",
      specifications: "Contains Permethrin 5% w/w in a lotion base. Single-application treatment.",
      applications: "Scabies (Sarcoptes scabiei), head lice treatment.",
    },
  ],
  "musculoskeletal": [
    {
      name: "Diclofenac Sodium 75mg/3mL Injection",
      description: "NSAID injection for moderate to severe musculoskeletal pain and inflammation.",
      specifications: "Each ampoule contains Diclofenac Sodium 75mg/3mL. Deep IM injection.",
      applications: "Post-operative pain, acute gout, renal colic, musculoskeletal pain.",
    },
    {
      name: "Methylprednisolone 40mg/mL Injection",
      description: "Corticosteroid injection for inflammatory musculoskeletal conditions.",
      specifications: "Each vial contains Methylprednisolone Acetate 40mg/mL. Multi-dose vial.",
      applications: "Rheumatoid arthritis flares, bursitis, tendinitis, synovitis.",
    },
    {
      name: "Etoricoxib 90mg Tablets",
      description: "COX-2 selective NSAID for osteoarthritis and rheumatoid arthritis.",
      specifications: "Film-coated tablets containing Etoricoxib 90mg. Pack of 7s and 14s.",
      applications: "Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute gout.",
    },
  ],
  "neuromuscular-blockade": [
    {
      name: "Vecuronium Bromide 4mg Injection",
      description: "Non-depolarizing neuromuscular blocking agent for intraoperative muscle relaxation.",
      specifications: "Each vial contains Vecuronium Bromide 4mg powder. Reconstitute with 2mL WFI.",
      applications: "Facilitation of endotracheal intubation, skeletal muscle relaxation during surgery.",
    },
    {
      name: "Atracurium Besylate 25mg/2.5mL Injection",
      description: "Intermediate-duration non-depolarizing neuromuscular blocking agent.",
      specifications: "Each ampoule contains Atracurium Besylate 25mg in 2.5mL. Refrigerate.",
      applications: "Endotracheal intubation, muscle relaxation during mechanical ventilation.",
    },
    {
      name: "Rocuronium Bromide 50mg/5mL Injection",
      description: "Rapid-onset non-depolarizing neuromuscular blocking agent suitable for RSI.",
      specifications: "Each vial contains Rocuronium Bromide 50mg in 5mL (10mg/mL). Refrigerate.",
      applications: "Rapid sequence intubation, general anesthesia muscle relaxation.",
    },
  ],
  "endocrine": [
    {
      name: "Levothyroxine Sodium 100mcg Tablets",
      description: "Synthetic thyroid hormone for hypothyroidism replacement therapy.",
      specifications: "Each tablet contains Levothyroxine Sodium 100mcg. Pack of 30 tablets.",
      applications: "Hypothyroidism, thyroid hormone replacement, TSH suppression in thyroid cancer.",
    },
    {
      name: "Metformin HCl 500mg Tablets",
      description: "Biguanide oral antidiabetic agent for type 2 diabetes management.",
      specifications: "Each tablet contains Metformin Hydrochloride 500mg. Pack of 30.",
      applications: "Type 2 diabetes mellitus first-line therapy, pre-diabetes, polycystic ovary syndrome.",
    },
    {
      name: "Glibenclamide 5mg Tablets",
      description: "Second-generation sulfonylurea for blood glucose control in type 2 diabetes.",
      specifications: "Each tablet contains Glibenclamide 5mg. Scored for dose flexibility.",
      applications: "Type 2 diabetes mellitus, adjunct to diet and exercise.",
    },
  ],
  "respiratory": [
    {
      name: "Salbutamol 2.5mg/2.5mL Nebulizer Solution",
      description: "Short-acting beta-2 agonist bronchodilator for acute bronchospasm relief.",
      specifications: "Each unit-dose vial contains Salbutamol Sulfate 2.5mg in 2.5mL. Sterile.",
      applications: "Acute asthma attacks, COPD exacerbations, exercise-induced bronchospasm.",
    },
    {
      name: "Budesonide 0.5mg/2mL Nebulizer Suspension",
      description: "Inhaled corticosteroid for maintenance therapy of asthma and COPD.",
      specifications: "Each unit contains Budesonide 0.5mg in 2mL suspension. Single-dose ampoule.",
      applications: "Asthma maintenance, croup, COPD maintenance therapy.",
    },
    {
      name: "Ipratropium Bromide 0.5mg/2.5mL Nebulizer Solution",
      description: "Anticholinergic bronchodilator for COPD and asthma management.",
      specifications: "Each unit contains Ipratropium Bromide 0.5mg in 2.5mL. Sterile solution.",
      applications: "COPD bronchospasm, combined bronchodilator therapy with beta-agonists.",
    },
  ],
  "antimalarial": [
    {
      name: "Artemether 20mg + Lumefantrine 120mg Tablets",
      description: "ACT combination therapy for uncomplicated falciparum malaria.",
      specifications: "Each tablet contains Artemether 20mg and Lumefantrine 120mg. 6-dose course.",
      applications: "Treatment of uncomplicated Plasmodium falciparum malaria.",
    },
    {
      name: "Artesunate 60mg Injection",
      description: "Parenteral artemisinin derivative for severe falciparum malaria.",
      specifications: "Each vial contains Artesunate 60mg powder. Reconstitute with 1mL NaHCO3.",
      applications: "Severe malaria, hyperparasitemia, cerebral malaria.",
    },
    {
      name: "Chloroquine Phosphate 250mg Tablets",
      description: "4-aminoquinoline antimalarial for prophylaxis and treatment in sensitive regions.",
      specifications: "Each tablet contains Chloroquine Phosphate 250mg (equiv. to 155mg base).",
      applications: "Malaria prophylaxis, treatment of chloroquine-sensitive Plasmodium infections, rheumatoid arthritis.",
    },
  ],
};

async function seed() {
  console.log("Seeding database...");

  await db.delete(productsTable);
  await db.delete(categoriesTable);

  console.log("Inserting categories...");
  const insertedCategories = await db
    .insert(categoriesTable)
    .values(categories)
    .returning({ id: categoriesTable.id, slug: categoriesTable.slug });

  const categoryMap: Record<string, number> = {};
  for (const cat of insertedCategories as CategoryRow[]) {
    categoryMap[cat.slug] = cat.id;
  }

  console.log("Inserting products...");
  for (const [slug, products] of Object.entries(productsByCategorySlug)) {
    const categoryId = categoryMap[slug];
    if (!categoryId) {
      console.warn(`Category not found for slug: ${slug}`);
      continue;
    }
    for (const product of products) {
      await db.insert(productsTable).values({
        name: product.name,
        categoryId,
        description: product.description,
        specifications: product.specifications ?? null,
        applications: product.applications ?? null,
        genericName: product.genericName ?? null,
        strength: product.strength ?? null,
        containerType: product.containerType ?? null,
        isPrefillSyringe: product.isPrefillSyringe ?? false,
      });
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
