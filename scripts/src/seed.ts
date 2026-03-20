import { db } from "@workspace/db";
import { categoriesTable, productsTable } from "@workspace/db/schema";

const categories = [
  { name: "Injectables", slug: "injectables", description: "Various injectable pharmaceutical formulations." },
  { name: "Tablet/capsules", slug: "tablet-capsules", description: "Solid oral dosage forms including tablets and capsules." },
  { name: "APIs(Active Pharmaceutical Ingredients)", slug: "apis", description: "Active Pharmaceutical Ingredients for pharmaceutical manufacturing." },
];

const injectablesRaw = `Cardiovascular System	Antihypertensive	Propranolol	1mg/ml
Cardiovascular System	Antihypertensive	Enalapril	1.25mg/ml
Cardiovascular System	Antihypertensive	Esmolol	10mg/ml, 10ml & 250mg/ml, 10ml
Cardiovascular System	Antihypertensive	Metoprolol	1mg/ml-5ml, 5mg/5ml
Cardiovascular System	Antihypertensive	Clonidine	100mcg/ml, 150mcg/ml, 1ml
Cardiovascular System	Antihypertensive	Phenoxybenzamine	50mg/ml
Cardiovascular System	Antihypertensive	Labetalol	100mg/20ml, 20mg/4ml
Cardiovascular System	Antihypertensive	Sodium Nitroprusside	50mg/5ml
Cardiovascular System	Coagulants	Protamine Sulphate	50mg/ 5ml
Cardiovascular System	Coagulants	Aminocaproic	5gm/20ml, 250mg/ml
Cardiovascular System	Coagulants	Aprotinin	100000 KIU, 500000 KIU
Cardiovascular System	Coagulants	Etamsylate	250mg/ 2ml
Cardiovascular System	Coagulants	Methyl Ergometrine	0.2mg/ml, 1ml
Cardiovascular System	Coagulants	Filgrastim injection	300mcg/0.5ml
Cardiovascular System	Coagulants	Furosemide injection bp	10mg/ml
Cardiovascular System	Coagulants	Phytonadione Injection	10mg/1ml, 2mg/0.2ml
Cardiovascular System	Coagulants	Amplsoxsuprine HCl injection USP	10mg/ml
Cardiovascular System	Coagulants	Nitroglycerine injection USP	5mg/ml
Cardiovascular System	Coagulants	Norepinephrine bitartrate Injection BP	4mg/2ml
Cardiovascular System	Anti-Anginal	Nicorandil	2mg
Cardiovascular System	Anti-Anginal	Glyceryl Trinitrate Nitroglycerine	10mg/10ml, 25mg/5ml, 50mg/10ml
Cardiovascular System	Anti-Anginal	Verapamil	5mg/2ml
Cardiovascular System	Anti-Anginal	Diltiazem	25mg/5ml
Cardiovascular System	Anti-Arrhythmic Agent	Procainamide	100mg/ml
Cardiovascular System	Anti-Arrhythmic Agent	Amiodarone	150mg/3ml
Cardiovascular System	Anti-Arrhythmic Agent	Adenosine	6mg/2ml
Cardiovascular System	Anticholinergics	Atropine Sulphate	0.6mg/ml 1 ml amp
Cardiovascular System	Anticholinergics	Atropine Sulphate	0.6mg/ml 10 ml vial
Cardiovascular System	Diuretics	Torsemide	10mg/ml
Cardiovascular System	Diuretics	Frusemide	10mg/ml, 2ml, 4ml & 25ml
Cardiovascular System	Vasodilators	Alprostadil	20mcg/ml, 1ml & 500mcg/ml, 1ml
Cardiovascular System	Vasodilators	Pentoxifylline	20mg/ml
Cardiovascular System	Anti-Platelets	Eptifibatide	20mg, 75mg
Cardiovascular System	Anti-Platelets	Tranexamic Acid	500mg/ 5ml
Cardiovascular System	Cardiac Shock & Failure	Milrinone	10mg, 20mg, 50mg
Cardiovascular System	Cardiac Shock & Failure	Amrinone	100mg/20ml
Cardiovascular System	Cardiac Shock & Failure	Dobutamine	50mg/4ml, 250mg/20ml
Cardiovascular System	Cardiac Shock & Failure	Levosimendan	12.5mg/ml
Cardiovascular System	Cardiac Shock & Failure	Isoprenaline	200mcg/ml, 1ml
Cardiovascular System	Cardiac Shock & Failure	Dopamine	40mg/ml
Cardiovascular System	Cardiac Shock & Failure	Noradrenaline bitartrate 2 mg	2ml
Cardiovascular System	Cardiac Shock & Failure	Digoxin	0.5mg/2ml
Cardiovascular System	Anti-Coagulants	Nadroparin	3075IU, 4100IU, 6450IU, 8600IU
Cardiovascular System	Anti-Coagulants	Heparin	5000IU/5ml & 25000IU/5ml
Cardiovascular System	Thrombolytics	Urokinase	2,50,000 IU, 500000 IU, 750000 IU, 10,00,000 IU
Cardiovascular System	Thrombolytics	Streptokinase	750000 IU, 1500000 IU
Antibiotic/Anti-Infectives	General	Acyclovir Sodium	250mg, 500mg, And 25mg/ml
Antibiotic/Anti-Infectives	General	Fosfomycin	80mg/2ml, 10mg/2ml, 20mg/2ml, 160mg/2ml
Antibiotic/Anti-Infectives	General	Azithromycin	250mg, 500mg, 1g
Antibiotic/Anti-Infectives	General	Ganciclovir	500mg
Antibiotic/Anti-Infectives	General	Kanamycin	500mg, 1g
Antibiotic/Anti-Infectives	General	Lincomycin	300mg, 1ml
Antibiotic/Anti-Infectives	General	Amikacin	100mg/2ml, 250mg/2ml, 500mg/2ml, 1g
Antibiotic/Anti-Infectives	General	Netilmicin Sulphate	10mg/ml, 25mg/ml, 50mg/ml, 100mg/ml
Antibiotic/Anti-Infectives	General	Clindamycin Phosphate	300mg, 600mg
Antibiotic/Anti-Infectives	General	Polymyxin B	500000 IU
Antibiotic/Anti-Infectives	General	Streptomycin	0.75g, 1g
Antibiotic/Anti-Infectives	General	Tobramycin Sulphate	80mg/2ml
Antibiotic/Anti-Infectives	General	Spectinomycin HCL	1g, 2g
Antibiotic/Anti-Infectives	General	Telcoplanin	200mg, 400mg
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Lornoxicam	8mg
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Hydrocortisone Sodium Succinate	1mg, 200mg, 500mg
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Dexamethasone Sodium Phosphate	4mg/ml, 1ml & 2ml, 10ml, 30ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Indomethacin	1mg
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Triamcinolone Acetonide	40mg/ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Betamethasone	6mg/ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Diphenhydramine HCL	50mg/ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Ademetionine Butanedisulfonate	500mg
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Di. Sodium E.D.T.A 150 mg	50ml, 100ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Pheniramine Maleate 22.75mg/ml	2ml, 10ml, 30ml
NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Dimenhydrinate	5ml
NSAIDs	Analgesic/Antipyretic	Ketoprofen	100mg/2ml, 100mg/5ml
NSAIDs	Analgesic/Antipyretic	Metamizole	1gm/2ml, 30ml
NSAIDs	Analgesic/Antipyretic	Piroxicam	0mg/ml, 1ml
NSAIDs	Analgesic/Antipyretic	Ketorolac tromethamine	60mg/2ml, 30mg/ml, 1ml
NSAIDs	Analgesic/Antipyretic	Aceclofenac	150mg/ml, 1ml
NSAIDs	Analgesic/Antipyretic	Paracetamol	75mg/ml, 2ml, 150mg/ml, 10ml, 10mg/ml, 50ml
NSAIDs	Analgesic/Antipyretic	Tramadol hydrochloride	50mg/ml, 1ml, 2ml
NSAIDs	Analgesic/Antipyretic	Lysine acetylsalicylate	0.9g, 1.8g
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Famotidine	20mg/ 2ml, 200mg/ 20ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Dicyclomine	10mg/ml, 2ml, 20mg/ 2ml, 2ml, 100mg/ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Esomeprazole	40mg
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Hyoscine Butylbromide	20mg/ml, 1ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metadoxine	60mg/5ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metoclopramide	10mg/2ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	L-Ornithine L-Aspartate	5mg/10ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Omeprazole	40mg
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Cimetidine	100mg/ml, 2ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Pantoprazole	40mg
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Ranitidine	50mg/2ml, 10ml, 30ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Lansoprazole	30mg
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Ondansetron	2mg/ml-2ml, 4 mg/ml-2 ml, 10ml, 30ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Palonosetron HCL	0.25mg/5ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metoclopramide HCL 5 mg	2ml, 10ml, 30ml
Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Granisetron	1mg/1ml, 1mg/5ml, 3mg/ml, 4mg/ml
Anti-Malarial	General	Quinine Dihydrochloride	100mg/ml, 2ml, 250mg/2ml, 300mg/ml, 1ml & 2ml, 400mg/4ml
Anti-Malarial	General	Artemether	20mg/ml, 80mg, 150mg/2ml
Anti-Malarial	General	Artesunate	30mg, 60mg, 120mg, 180mg, 150mg & 240mg
Anti-Malarial	General	Chloroquine Phosphate	40mg, 64.5mg
Anti-Malarial	General	Chloroquine 40mg/ml	30ml, 5ml
Anti-Malarial	General	α - βArteether	75mg, 150mg
Anaesthetics	General	Bupivacaine+ Dextrose	5mg, 80mg, 4ml
Anaesthetics	General	Bupivacaine 0.5%	4ml, 10ml, 20ml
Anaesthetics	General	Lignocaine + Adrenaline	60mg + 180mg/30ml
Anaesthetics	General	Ketamine Hydrochloride	10mg/ml, 20ml, 50mg/ml, 10ml
Anaesthetics	General	Lidocaine HCL + Epinephrine	36mg + 0.0225mg
Anaesthetics	General	Lidocaine	1%, 5ml, 2%, 20ml, 30ml, 50ml
Anaesthetics	General	Atracurium	10mg/ml, 2.5ml, 10mg/ml, 5ml
Anaesthetics	General	Succinylcholine Chloride	50mg/2ml, 10ml, 200mg
Anaesthetics	General	Pancuronium	4mg/2ml
Anaesthetics	General	Droperidol	2.5mg, 5mg
Anaesthetics	General	Thiopentone Sodium	500mg, 1g
Antidotes	General	Dimercaprol	50mg/ml 2ml
Antidotes	General	Pralidoxime Chloride	200mg, 500mg/20ml
Musculo-Skeletal Disorder	General	Pipecuronium Bromide	2mg/ml
Musculo-Skeletal Disorder	General	Diclofenac Sodium	75mg/3ml
Musculo-Skeletal Disorder	General	Meloxicam	15mg/1.5ml
Musculo-Skeletal Disorder	General	Drotaverine	20mg/ml, 2ml
Musculo-Skeletal Disorder	General	Parecoxib	40mg/2ml
Musculo-Skeletal Disorder	General	Ibuprofen	5mg/ml, 2ml
Musculo-Skeletal Disorder	General	Thiocolchicoside	4mg/2ml
Neuromuscular Blockade	General	Sugammadex	100mg/ml, 2ml & 5ml
Muscle Relaxant	General	Tolperisone Hydrochloride & Lidocaine	100mg + 2.5mg, 1ml
Muscle Relaxant	General	Vecuronium Bromide	4mg, 10mg, 20mg
Muscle Relaxant	General	Rocuronium Bromide	10mg/ml, 5ml
Muscle Relaxant	General	Glycopyrrolate	200mcg/ml 1ml & 3ml
Muscle Relaxant	General	Dantrolene	20mg
Endocrine System	General	Methylprednisolone Acetate	40mg/ml
Endocrine System	General	Terlipressin	1mg/10ml
Endocrine System	General	Vasopressin	10Units, 20Units, 40Units
Endocrine System	General	Levothyroxine Injection	200mcg/ml, 1ml
Endocrine System	General	Methylprednisolone Sodium Succinate Powder	20mg, 40mg, 120mg, 125mg, 500mg, 1g
Endocrine System	General	Octreotide	50mcg/ml, 1ml & 100mcg/ml, 1ml
Endocrine System	General	Somatostatin	3000mcg, 250mcg
Endocrine System	General	Desmopressin	2.5ml, 4mcg/ml
Hepatic Stimulant	General	Essential Phospholipids	250mg/5ml
Respiratory	General	Caffeine Citrate	10mg/ml, 1ml & 2ml, 20mg/ml, 1ml & 2ml
Respiratory	General	Aminophylline	250mg/10ml
Respiratory	General	Ambroxol HCL	15mg/2ml
Respiratory	General	Etofylline + Theophylline	2ml
Respiratory	General	Bromhexine HCL	4mg/2ml
Available On Request	General	2-Pyridine Aldoxime Methiodide 25 mg/ml	20 ml amp
Available On Request	General	Methyl Ergometrine maleate	1 ml amp
Available On Request	General	Sod. Ascorbate IP	20ml, 50ml
Available On Request	General	Adrenochrome Monosemicarabzone 5mg	10 ml vial
Pre-Filled Syringe	Container Type: 0.6ml	Enoxaparin Sodium Injection Ip	60mg
Pre-Filled Syringe	Container Type: 5ml	Dobutamine Injection USP	50mg/ml
Pre-Filled Syringe	Container Type: 5ml	Dopamine Hydrochloride Injection USP	40mg/ml
Pre-Filled Syringe	Container Type: 1ml & 5ml	Heparin Injection BP	5000IU
Pre-Filled Syringe	Container Type: 1ml & 5ml	Heparin Injection Bp	1000IU
Pre-Filled Syringe	Container Type: 2ml	Adenosine Injection USP	3mg
Pre-Filled Syringe	Container Type: 4ml	Sterile Noradrenaline Concentrate Bp	2mg
Pre-Filled Syringe	Container Type: 1ml	Glycopyrrolate Injection USP	0.2mg
Pre-Filled Syringe	Container Type: 5ml	Neostigmine Injection	0.5mg
Pre-Filled Syringe	Container Type: 5ml	Tranexamic Acid Injection Bp	100mg
Pre-Filled Syringe	Container Type: 1ml, 2ml, 4ml & 5ml	Oxytocin Injection Bp	5IU
Pre-Filled Syringe	Container Type: 5ml	Iron Sucrose Injection Bp	20mg
Pre-Filled Syringe	Container Type: 3ml	Vitamin B1, B6 & B12 Injection	---
Pre-Filled Syringe	Container Type: 2ml	Sodium Hyaluronate Injection	1.0W/V
Pre-Filled Syringe	Container Type: 1ml, 2ml, 5ml & 10ml	Sodium Chloride Injection Usp	9mg
Pre-Filled Syringe	Container Type: 1ml, 2ml, 5ml & 10ml	Sterilized Water for Injection Bp	---
Pre-Filled Syringe	Container Type: 4ml	Labetalol Injection Bp	5mg
Pre-Filled Syringe	Container Type: 1, 2, 3, 5 ml	Granisetron Hydrochloride Injection USP	1mg
Pre-Filled Syringe	Container Type: 2ml	Isoxsuprine Hydrochloride Injection	5mg
Pre-Filled Syringe	Container Type: 2ml, 4ml	Clindamycin Injection USP	150mg
Pre-Filled Syringe	Container Type: 2ml, 30ml	Methylcobalamin & Multivitamin Injection	1000mcg
Pre-Filled Syringe	Container Type: 1ml	Terbutaline	0.5 mg
Pre-Filled Syringe	Container Type: 2ml	HydroxypropylMethylcellulose Ophthalmic Solution USP	2% W/V
Pre-Filled Syringe	Container Type: 0.25ml	Di. Sod. E.D.T. A	37.5mg
Pre-Filled Syringe	Container Type: 2ml	Pancuronium Injection BP	2mg
Pre-Filled Syringe	Container Type: 2ml	Torsemide Injection	10mg
Liquid Inhalation Anesthesia	General	Sevoflurane	50ml, 250ml
Liquid Inhalation Anesthesia	General	Isoflurane	30ml, 100ml, 250ml
Liquid Inhalation Anesthesia	General	Adrenaline (Ephinephrine)	1ml
Liquid Inhalation Anesthesia	General	Halothane	250ml
B- Lactam Antibiotics	Penicillin	Tobramycin	40mg, ml
B- Lactam Antibiotics	Penicillin	Benzathinepenicillin	600Mn IU, 1.2Mn IU
B- Lactam Antibiotics	Penicillin	Ampicillin Sodium	100mg, 250mg, 500mg, 1g
B- Lactam Antibiotics	Penicillin	Ampicillin + Cloxacillin	250mg, 500mg
B- Lactam Antibiotics	Penicillin	Ampicillin + Sulbactam	750mg + 250mg, 1g + 500mg, 2g + 1g
B- Lactam Antibiotics	Penicillin	Ticarcillin + clavulanic Acid	1.6g, 3.1g
B- Lactam Antibiotics	Penicillin	Timentin & Clavulanate Potassium Injection	3gm + 0.2g/1.5 + 0.1
B- Lactam Antibiotics	Penicillin	Cloxacillin Sodium	250mg, 500mg, 1g
B- Lactam Antibiotics	Penicillin	Oxacillin Sodium	500mg, 1g
B- Lactam Antibiotics	Penicillin	Amoxycillin	250mg, 500mg, 1g
B- Lactam Antibiotics	Penicillin	Flucloxacillin Sodium	250mg, 500mg, & 1gm
B- Lactam Antibiotics	Penicillin	Piperacillin	1g, 2g, 4g
B- Lactam Antibiotics	Penicillin	Amoxicillin + Clavulanate Potassium	0.3g, 0.6g, 1.2g & 2.4g
B- Lactam Antibiotics	Penicillin	Piperacillin Sodium + Tazobactam Sodium	2.25g, 4.5g
B- Lactam Antibiotics	Penicillin	Oxytetracycline	50mg/ml
B- Lactam Antibiotics	Cephalosporin	Cefuroxime & Tazobactam	1.125gm
B- Lactam Antibiotics	Cephalosporin	Cefalotin	1g, 1.5g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefpirome	250mg, 500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefepime	250mg, 500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefpirome+sulbactam	750mg, 1.5g, 3g
B- Lactam Antibiotics	Cephalosporin	Cefixime + Sulbactam	750mg, 1.5g, 3g
B- Lactam Antibiotics	Cephalosporin	Cephaloridine	500mg, 1g
B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Tazobactam	500mg + 62.5mg, 1g + 125mg
B- Lactam Antibiotics	Cephalosporin	Ceftazidime	250mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefmetazole	500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefepime + Tazobactam	1g + 125mg, 500 + 62.5mg
B- Lactam Antibiotics	Cephalosporin	Ceftriaxone	125mg, 250mg, 500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefoperazone + Sulbactam	500mg, 1.5g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefoperazone	500mg, 1000mg, 1g
B- Lactam Antibiotics	Cephalosporin	Cefotaxime + Sulbactam	750mg, 1g, 1.5g
B- Lactam Antibiotics	Cephalosporin	Cefotaxime	250mg, 500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Ceftriaxone+sulbactam	500mg, 750mg, 1g, 1.5g
B- Lactam Antibiotics	Cephalosporin	Ceftriaxone + Tazobactam	1.125g, 2.250g
B- Lactam Antibiotics	Cephalosporin	Ceftizoxime	500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cefuroxime	250mg, 750mg, 1.5g
B- Lactam Antibiotics	Cephalosporin	Cefoxitin	1g, 2g, 10g
B- Lactam Antibiotics	Cephalosporin	Cefotetan	1g, 10g
B- Lactam Antibiotics	Cephalosporin	Cefamandole Nafate	1gm
B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Sulbactam	750mg, 1.5gm
B- Lactam Antibiotics	Cephalosporin	Cefodizime	500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Avibactam	2.5gm
B- Lactam Antibiotics	Cephalosporin	Cefazolin	125mg, 250mg, 500mg, 1g
B- Lactam Antibiotics	Cephalosporin	Cefotiam HCL	500mg, 1g
B- Lactam Antibiotics	Cephalosporin	Cefbuperazone	500mg, 1g
B- Lactam Antibiotics	Cephalosporin	Cefpiramide	500mg, 1g, 2g
B- Lactam Antibiotics	Cephalosporin	Cephalothin	1gm, 1.5gm, 2gm
B- Lactam Antibiotics	Cephalosporin	Cefuzonam	250mg, 500mg, 1g
B- Lactam Antibiotics	Monobactam	Sulbactam	500mg, 1g, 2gm
B- Lactam Antibiotics	Monobactam	Aztreonam & Avibactam	--
B- Lactam Antibiotics	Monobactam	Aztreonam	250mg, 500mg, 1g, 2g
B- Lactam Antibiotics	Carbapenems	Meropenem	500mg, 1g, 2g
B- Lactam Antibiotics	Carbapenems	Biapenem	0.3g
B- Lactam Antibiotics	Carbapenems	Ertapenem	1g
B- Lactam Antibiotics	Carbapenems	Doripenem	500mg, 1g
B- Lactam Antibiotics	Carbapenems	Meropenem + Tazobactam	562.5mg + 1.125g
B- Lactam Antibiotics	Carbapenems	Meropenem + Sulbactam	250mg + 125mg, 500mg + 250mg, 1g + 500mg
B- Lactam Antibiotics	Carbapenems	Imipenem + Cilastatin	250mg + 250mg, 500mg + 500mg
General Dry Injectables	General	Anidulafungin For Injection 50 Mg	50mg, 100mg
General Dry Injectables	General	Aztreonam Injection	500mg, 1000mg, 2000mg
General Dry Injectables	General	For Injection 50 Caspofungin Mg	50mg, 70mg
General Dry Injectables	General	Clarithromycin Injection	500mg
General Dry Injectables	General	Colistimethate Sodium Injection	1,000,000 IU, 2,00,0000 IU, 5,00,0000 IU
General Dry Injectables	General	Doxycycline For Injection USP	10mg
General Dry Injectables	General	Hydrocortisone Sodium Succinate Injection	100mg, 200mg
General Dry Injectables	General	Micafungin Sodium for Injection	100mg
General Dry Injectables	General	Rabeprazole Injection	20mg
General Dry Injectables	General	Teicoplanin Injection	200mg, 400mg
General Dry Injectables	General	Ulinastatin For Injection 1,00,000 Iu	50,000 IU, 1,00,000 IU
General Dry Injectables	General	Chloramphenicol Sodium Succinate Injection	1.0gm
General Dry Injectables	General	Azithromycin For Infusion Bp	500mg
General Dry Injectables	General	Ganciclovir Injection	500mg
Dental Cartridge 1.8ml	General	Articaine 4% And Adrenaline 1:100,000 Injection	(Arthil-4%)
Dental Cartridge 1.8ml	General	Lidocaine Hydrochloride Injection B	(Jetlox-2%)
Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride Injection 3%	(Mephil-3%)
Dental Cartridge 1.8ml	General	Lignocaine Hydrochloride and Adrenaline Injection BP	(Jetlox-2% A)
Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 36.00 Mg (3%) + Noradrenaline Tartrate 0.036 Mg	(Corresponding Amount in Noradrenaline 0.018 Mg)
Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 2%	---
Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 36.00 Mg (3%) + ADRENALINE 0.018 Mg	---
Dental Cartridge 1.8ml	General	Lignocaine HCL 24.64 Mg/Ml. (2%) + Adrenaline 0.01mg/Ml. (1:80,000)	---
`;

const tabletsRaw = `1	GENERAL	TABLET	Paracetamol Tablets IP 500 mg	Uncoated
2	GENERAL	TABLET	Paracetamol Tablets IP 650 mg	Uncoated
3	GENERAL	TABLET	Ibuprofen Tablets IP 200 mg	Film coated
4	GENERAL	TABLET	Ibuprofen Tablets IP 400 mg	Film coated
5	GENERAL	TABLET	Nimesulide Tablets 100 mg	Uncoated
6	GENERAL	TABLET	Nimesulide Tablets 200 mg	Uncoated
7	GENERAL	TABLET	Nimesulide Dispersible Tablets 100mg	uncoated
8	GENERAL	TABLET	Diclofenac Sodium Tablets IP 50 mg	Enteric Coated
9	GENERAL	TABLET	Diclofenac Sodium PR Tablets 100 mg	Enteric Coated
10	GENERAL	TABLET	Ibuprofen and Paracetamol Tablets (400+325)	Uncoated
11	GENERAL	TABLET	Nimesulide and Paracetamol Tablets (100+325)	Uncoated
12	GENERAL	TABLET	Nimesulide and Paracetamol Tablets (100+325)	Uncoated
13	GENERAL	TABLET	Aceclofenac 100mg	Film coated
14	GENERAL	TABLET	Aceclofenac, Paracetamol Tablets (100+500)	Film coated
15	GENERAL	TABLET	Aceclofenac, Paracetamol Tablets (100+325)	Film coated
16	GENERAL	TABLET	Aceclofenac, Paracetamol Tablets (100+325)	Film coated
17	GENERAL	TABLET	Aceclofenac, Paracetamol Tablets (100+325)	Film coated
18	GENERAL	TABLET	Aceclofenac, Paracetamol and Serratiopeptidase Tablets (100+325+15)	Film coated
19	GENERAL	TABLET	Diclofenac Sodium and Paracetamol Tablets IP (50+325)	uncoated
20	GENERAL	TABLET	Diclofenac-50+paracetamol-325+Chlorzoxazone-250	Uncoated
21	GENERAL	TABLET	Cetirizine Hydrochloride Tablets IP 10mg	Film coated
22	GENERAL	TABLET	Artemether + Lumefantrine Tablets (20 + 120)	Uncoated
23	GENERAL	TABLET	Artemether + Lumefantrine Tablets (80 + 480)	Uncoated
24	GENERAL	TABLET	Dexamethasone 0.5mg	Uncoated
25	GENERAL	TABLET	Dexamethasone 4mg	Uncoated
26	GENERAL	TABLET	Fluconazole 150mg	Uncoated
27	GENERAL	TABLET	Albendazole 200mg	Film coated
28	GENERAL	TABLET	Albendazole 400mg	Film coated
29	GENERAL	TABLET	Chlorpheniremine Maleate 4mg	Uncoated
30	GENERAL	TABLET	Levocetirizine Tablets IP 5mg	Film coated
31	GENERAL	TABLET	Montelukast Sodium and Levocetirizine Tablets IP (10+5)	Film coated
32	GENERAL	TABLET	Paracetamol, Phenylephrine HCL, CPM Tablets (500+5+2)	Uncoated
33	GENERAL	TABLET	Paracetamol, Phenylephrine HCL, CPM Tablets (500+5+2)	Uncoated
34	GENERAL	TABLET	Paracetamol-500+Caffeine-30+PEHCL-10+CPM-4 Tab	UNCOATED
35	GENERAL	TABLET	Paracetamol-325+PEHCL-5+CETIRIZINE-5 Tab	UNCOATED
37	GENERAL	TABLET	Norfloxacin Tablets IP 400mg	Film coated
38	GENERAL	TABLET	Ciprofloxacin Tablets IP 250mg	Film coated
39	GENERAL	TABLET	Ciprofloxacin Tablets IP 500mg	Film coated
40	GENERAL	TABLET	Levofloxacin Tablets IP 250mg	Film coated
41	GENERAL	TABLET	Levofloxacin Tablets IP 500mg	Film coated
42	GENERAL	TABLET	Ofloxacin Tablets IP 200mg	Film coated
43	GENERAL	TABLET	Ofloxacin Tablets IP 400mg	Film coated
44	GENERAL	TABLET	OFLOXACIN-200+ORNIDAZOLE-500 MG	Film coated
45	GENERAL	TABLET	Sparfloxacin Tablets IP 100mg	Film coated
46	GENERAL	TABLET	Sparfloxacin Tablets IP 200mg	Film coated
47	GENERAL	TABLET	Azithromycin Tablets IP 250mg	Film coated
48	GENERAL	TABLET	Azithromycin Tablets IP 500mg	Film coated
49	GENERAL	TABLET	Erythromycin Tablets BP 500mg	Film coated
50	GENERAL	TABLET	Clarithromycin Tablets IP 250mg	Film coated
51	GENERAL	TABLET	Clarithromycin Tablets IP 500mg	Uncoated
52	GENERAL	TABLET	Roxithromycin Tablets IP 150mg	Uncoated
53	GENERAL	TABLET	Roxithromycin Tablets IP 300mg	Film Coated
54	GENERAL	TABLET	Amlodepine Tablets IP 5 mg	Film Coated
55	GENERAL	TABLET	Amlodepine Tablets IP 10 mg	Uncoated
56	GENERAL	TABLET	Atorvastatin Tablets IP 10 mg	Film Coated
57	GENERAL	TABLET	Atorvastatin Tablets IP 20 mg	Film Coated
58	GENERAL	TABLET	Nebivolol Tablets IP 5 mg	Uncoated
59	GENERAL	TABLET	Rosuvastatin Tablets IP 10 mg	Uncoated
60	GENERAL	TABLET	Rosuvastatin Tablets IP 20 mg	Uncoated
61	GENERAL	TABLET	Telmisartan Tablets IP 20 mg	Uncoated
62	GENERAL	TABLET	Telmisartan Tablets IP 40 mg	Film coated
63	GENERAL	TABLET	Telmisartan Tablets IP 80 mg	Film Coated
64	GENERAL	TABLET	Metoprolol Tartrate IP 50 mg	Film Coated
65	GENERAL	TABLET	Metoprolol Sucssinate PR Tablets IP 50 mg	Film Coated
66	GENERAL	TABLET	Levetiracetam Tablets IP 250 mg	Uncoated
67	GENERAL	TABLET	Levetiracetam Tablets IP 500 mg	Uncoated
68	GENERAL	TABLET	Levetiracetam Tablets IP 750 mg	Uncoated
69	GENERAL	TABLET	Glimepiride Tablets IP 1 mg	Uncoated
70	GENERAL	TABLET	Glimepiride Tablets IP 2 mg	Uncoated
71	GENERAL	TABLET	Glimepiride Tablets IP 4 mg	Uncoated
72	GENERAL	TABLET	Voglibose Tablets IP 0.2 mg	Uncoated
73	GENERAL	TABLET	Voglibose Tablets IP 0.3 mg	Uncoated
74	GENERAL	TABLET	Voglibose MD Tablets 0.2 mg	Uncoated
75	GENERAL	TABLET	Voglibose MD Tablets 0.3 mg	Uncoated
76	GENERAL	TABLET	Metformin HCL Tablets IP 500 mg	
77	GENERAL	TABLET	Metformin HCL Tablets IP 500 mg Prolong Rlease Tablet	
80	GENERAL	TABLET	Ranitidine Hydrochloride Tablets IP 300mg	UNCOATED
81	GENERAL	TABLET	Pantoprazole Gastro Resistant Tablets IP 40mg	CHEWABLE
82	GENERAL	TABLET	Rabeprazole Gastro Resistant Tablets IP 20mg	Film coated
83	GENERAL	TABLET	Pantoprazole Tablets IP 40mg (WHITE)	Film coated
84	GENERAL	TABLET	Pantoprazole and Domperidone Tablets (40+10)	Film coated
85	GENERAL	TABLET	Fluconazole Tablets IP 150mg	Film coated
86	GENERAL	TABLET	Fluconazole Tablets IP 200mg	Enteric coated
87	GENERAL	TABLET	Fluconazole Tablets IP 200mg	Enteric coated
88	GENERAL	TABLET	Fluconazole Tablets IP 400mg	Enteric coated
89	GENERAL	TABLET	Fluconazole Tablets IP 400mg	Enteric coated
90	GENERAL	TABLET	Deflazacort Tablets 6 mg	Uncoated
91	GENERAL	TABLET	Deflazacort Tablets 12 mg	Uncoated
92	GENERAL	TABLET	Deflazacort Tablets 30 mg	Uncoated
93	GENERAL	TABLET	Tamsulosine HCL Modified Release Tablets 0.4mg	Uncoated
94	GENERAL	TABLET	Ondansetron Orally DT IP 4mg	Uncoated
95	GENERAL	TABLET	Dexamethasone Tablets IP 0.5 mg	Uncoated
96	GENERAL	TABLET	Betahistine Tablets IP 8 mg	Uncoated
97	GENERAL	TABLET	Betahistine Tablets IP 16 mg	Uncoated
98	GENERAL	TABLET	Betahistine Tablets IP 24 mg	Film coated
99	GENERAL	TABLET	Terbinafine Tablets 250 mg	Uncoated
100	GENERAL	TABLET	Voriconazole Tablets IP 200 mg	Uncoated
101	GENERAL	TABLET	Methyl Prednisolone Tablets IP 4 mg	Uncoated
102	GENERAL	TABLET	Oflaxacin 200 & Ordinazole 500 mg Tablets IP	Uncoated
103	GENERAL	TABLET	GABAPENTINE TABLETS IP 100MG	Uncoated
104	GENERAL	TABLET	GABAPENTINE TABLETS IP 300MG	Uncoated
105	GENERAL	TABLET	LOPERAMIDE TABLETS IP 2MG	Film coated
106	GENERAL	TABLET	TERBUTALINE SULPHATE IP 2.5MG	Uncoated
107	GENERAL	TABLET	CHLOROQUINE PHOSPHATE TABLETS 250MG	Film coated
108	GENERAL	TABLET	CHLOROQUINE PHOSPHATE TABLETS 500MG	Film coated
109	GENERAL	TABLET	HYDROXYCHLOROQUINE SULPHATE TABLETS 200MG	Film coated
110	GENERAL	TABLET	HYDROXYCHLOROQUINE SULPHATE TABLETS 400MG	UNCOATED
111	GENERAL	TABLET	ASCORBIC ACID TABLETS IP 500MG	UNCOATED
112	GENERAL	TABLET	CALCIUM AND VITAMIN D3 TAB	UNCOATED
113	GENERAL	TABLET	SILDENAFIL CITRATE TABLETS 100MH	UNCOATED
114	GENERAL	TABLET	TADAFIL TABLETS IP 50GM	UNCOATED
115	GENERAL	CAPSULE	Itraconazole Capsules 100mg	
116	GENERAL	CAPSULE	Itraconazole Capsules 200mg	
117	GENERAL	CAPSULE	Omeprazole Gastro Resistant Capsules IP 20mg	
118	GENERAL	CAPSULE	Opeprazole and Domperidone Capsules IP (20+10)	
119	GENERAL	CAPSULE	Opeprazole and Domperidone Capsules IP (20+10)	
120	GENERAL	CAPSULE	Rabeprazole Sodium EC and Domperidone SR Capsules (20+30)	
122	GENERAL	CAPSULE	Pantoprazole EC and Domperidone SR capsules (40+30)	2+275 MG/5ML
123	GENERAL	CAPSULE	Pantoprazole EC and Domperidone SR capsules (40+30)	250mg/5ml
124	GENERAL	CAPSULE	Itraconazole Capsules 100mg	125mg/5ml
125	GENERAL	CAPSULE	Itraconazole Capsules 200mg	100+162.5mg/5ml
126	GENERAL	CAPSULE	Clindamycin HCL Capsules IP 150 mg	200mg/5ml
127	GENERAL	CAPSULE	Clindamycin HCL Capsules IP 300 mg	2gm/5ml
`;

const apisRaw = `1
Fluticasone Propionate
(CAS 80474-14-2)
2
Fluticasone Furoate
(CAS 397864-44-7)
3
Fluocinolone Acetonide
(CAS 67-73-2)
4
Methylprednisolone
(CAS 83-43-2)
5
Budesonide
(CAS 51333-22-3)
6
Cetylpyridinium Chloride
(CAS 6004-24-6)
7
Lauryl Pyridinium Chloride
(CAS 207234-02-4)
8
Potassium Chloride [Pharma Grade]
(CAS 7447-40-7)`;

type CategoryRow = { id: number; slug: string };

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

  const productsToInsert = [];

  function generateSlug(text: string, index: number): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + index;
  }

  // Parse Injectables
  const injectablesLines = injectablesRaw.trim().split('\n');
  let pIdx = 0;
  for (const line of injectablesLines) {
    const parts = line.split('\t');
    if (parts.length >= 4) {
      productsToInsert.push({
        categoryId: categoryMap['injectables'],
        name: parts[2].trim(),
        slug: generateSlug(parts[2].trim(), ++pIdx),
        description: `${parts[0]} - ${parts[1]}`,
        strength: parts[3].trim(),
      });
    }
  }

  // Parse Tablets/Capsules
  const tabletsLines = tabletsRaw.trim().split('\n');
  for (const line of tabletsLines) {
    const parts = line.split('\t');
    if (parts.length >= 4) {
      productsToInsert.push({
        categoryId: categoryMap['tablet-capsules'],
        name: parts[3].trim(),
        slug: generateSlug(parts[3].trim(), ++pIdx),
        description: `Area: ${parts[1]}, Dosage: ${parts[2]}`,
        strength: parts.length > 4 ? parts[4].trim() : '',
      });
    }
  }

  // Parse APIs
  const apisLines = apisRaw.trim().split('\n');
  for (let i = 0; i < apisLines.length; i += 3) {
    if (i + 2 < apisLines.length) {
      productsToInsert.push({
        categoryId: categoryMap['apis'],
        name: apisLines[i + 1].trim(),
        slug: generateSlug(apisLines[i + 1].trim(), ++pIdx),
        description: `API Element - ${apisLines[i + 2].trim()}`,
        genericName: apisLines[i + 1].trim(),
        specifications: apisLines[i + 2].trim()
      });
    }
  }

  console.log(`Inserting ${productsToInsert.length} products...`);
  
  // Insert in batches
  const batchSize = 100;
  for (let i = 0; i < productsToInsert.length; i += batchSize) {
    const batch = productsToInsert.slice(i, i + batchSize);
    await db.insert(productsTable).values(batch);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
