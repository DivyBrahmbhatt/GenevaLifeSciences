import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const injectablesRaw = `1	Cardiovascular System	Antihypertensive	Propranolol	1mg/ml
1	Cardiovascular System	Antihypertensive	Enalapril	1.25mg/ml
1	Cardiovascular System	Antihypertensive	Esmolol	10mg/ml, 10ml & 250mg/ml, 10ml
1	Cardiovascular System	Antihypertensive	Metoprolol	1mg/ml-5ml, 5mg/5ml
1	Cardiovascular System	Antihypertensive	Clonidine	100mcg/ml, 150mcg/ml, 1ml
1	Cardiovascular System	Antihypertensive	Phenoxybenzamine	50mg/ml
1	Cardiovascular System	Antihypertensive	Labetalol	100mg/20ml, 20mg/4ml
1	Cardiovascular System	Antihypertensive	Sodium Nitroprusside	50mg/5ml
1	Cardiovascular System	Coagulants	Protamine Sulphate	50mg/ 5ml
1	Cardiovascular System	Coagulants	Aminocaproic	5gm/20ml, 250mg/ml
1	Cardiovascular System	Coagulants	Aprotinin	100000 KIU, 500000 KIU
1	Cardiovascular System	Coagulants	Etamsylate	250mg/ 2ml
1	Cardiovascular System	Coagulants	Methyl Ergometrine	0.2mg/ml, 1ml
1	Cardiovascular System	Coagulants	Filgrastim injection	300mcg/0.5ml
1	Cardiovascular System	Coagulants	Furosemide injection bp	10mg/ml
1	Cardiovascular System	Coagulants	Phytonadione Injection	10mg/1ml, 2mg/0.2ml
1	Cardiovascular System	Coagulants	Amplsoxsuprine HCl injection USP	10mg/ml
1	Cardiovascular System	Coagulants	Nitroglycerine injection USP	5mg/ml
1	Cardiovascular System	Coagulants	Norepinephrine bitartrate Injection BP	4mg/2ml
1	Cardiovascular System	Anti-Anginal	Nicorandil	2mg
1	Cardiovascular System	Anti-Anginal	Glyceryl Trinitrate Nitroglycerine	10mg/10ml, 25mg/5ml, 50mg/10ml
1	Cardiovascular System	Anti-Anginal	Verapamil	5mg/2ml
1	Cardiovascular System	Anti-Anginal	Diltiazem	25mg/5ml
1	Cardiovascular System	Anti-Arrhythmic Agent	Procainamide	100mg/ml
1	Cardiovascular System	Anti-Arrhythmic Agent	Amiodarone	150mg/3ml
1	Cardiovascular System	Anti-Arrhythmic Agent	Adenosine	6mg/2ml
1	Cardiovascular System	Anticholinergics	Atropine Sulphate	0.6mg/ml 1 ml amp
1	Cardiovascular System	Anticholinergics	Atropine Sulphate	0.6mg/ml 10 ml vial
1	Cardiovascular System	Diuretics	Torsemide	10mg/ml
1	Cardiovascular System	Diuretics	Frusemide	10mg/ml, 2ml, 4ml & 25ml
1	Cardiovascular System	Vasodilators	Alprostadil	20mcg/ml, 1ml & 500mcg/ml, 1ml
1	Cardiovascular System	Vasodilators	Pentoxifylline	20mg/ml
1	Cardiovascular System	Anti-Platelets	Eptifibatide	20mg, 75mg
1	Cardiovascular System	Anti-Platelets	Tranexamic Acid	500mg/ 5ml
1	Cardiovascular System	Cardiac Shock & Failure	Milrinone	10mg, 20mg, 50mg
1	Cardiovascular System	Cardiac Shock & Failure	Amrinone	100mg/20ml
1	Cardiovascular System	Cardiac Shock & Failure	Dobutamine	50mg/4ml, 250mg/20ml
1	Cardiovascular System	Cardiac Shock & Failure	Levosimendan	12.5mg/ml
1	Cardiovascular System	Cardiac Shock & Failure	Isoprenaline	200mcg/ml, 1ml
1	Cardiovascular System	Cardiac Shock & Failure	Dopamine	40mg/ml
1	Cardiovascular System	Cardiac Shock & Failure	Noradrenaline bitartrate 2 mg	2ml
1	Cardiovascular System	Cardiac Shock & Failure	Digoxin	0.5mg/2ml
1	Cardiovascular System	Anti-Coagulants	Nadroparin	3075IU, 4100IU, 6450IU, 8600IU
1	Cardiovascular System	Anti-Coagulants	Heparin	5000IU/5ml & 25000IU/5ml
1	Cardiovascular System	Thrombolytics	Urokinase	2,50,000 IU, 500000 IU, 750000 IU, 10,00,000 IU
1	Cardiovascular System	Thrombolytics	Streptokinase	750000 IU, 1500000 IU
1	Antibiotic/Anti-Infectives	General	Acyclovir Sodium	250mg, 500mg, And 25mg/ml
1	Antibiotic/Anti-Infectives	General	Fosfomycin	80mg/2ml, 10mg/2ml, 20mg/2ml, 160mg/2ml
1	Antibiotic/Anti-Infectives	General	Azithromycin	250mg, 500mg, 1g
1	Antibiotic/Anti-Infectives	General	Ganciclovir	500mg
1	Antibiotic/Anti-Infectives	General	Kanamycin	500mg, 1g
1	Antibiotic/Anti-Infectives	General	Lincomycin	300mg, 1ml
1	Antibiotic/Anti-Infectives	General	Amikacin	100mg/2ml, 250mg/2ml, 500mg/2ml, 1g
1	Antibiotic/Anti-Infectives	General	Netilmicin Sulphate	10mg/ml, 25mg/ml, 50mg/ml, 100mg/ml
1	Antibiotic/Anti-Infectives	General	Clindamycin Phosphate	300mg, 600mg
1	Antibiotic/Anti-Infectives	General	Polymyxin B	500000 IU
1	Antibiotic/Anti-Infectives	General	Streptomycin	0.75g, 1g
1	Antibiotic/Anti-Infectives	General	Tobramycin Sulphate	80mg/2ml
1	Antibiotic/Anti-Infectives	General	Spectinomycin HCL	1g, 2g
1	Antibiotic/Anti-Infectives	General	Telcoplanin	200mg, 400mg
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Lornoxicam	8mg
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Hydrocortisone Sodium Succinate	1mg, 200mg, 500mg
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Dexamethasone Sodium Phosphate	4mg/ml, 1ml & 2ml, 10ml, 30ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Indomethacin	1mg
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Triamcinolone Acetonide	40mg/ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Betamethasone	6mg/ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Diphenhydramine HCL	50mg/ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Ademetionine Butanedisulfonate	500mg
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Di. Sodium E.D.T.A 150 mg	50ml, 100ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Pheniramine Maleate 22.75mg/ml	2ml, 10ml, 30ml
1	NSAIDs	Anti-Inflammatory/Allergics/Anti-Histamine	Dimenhydrinate	5ml
1	NSAIDs	Analgesic/Antipyretic	Ketoprofen	100mg/2ml, 100mg/5ml
1	NSAIDs	Analgesic/Antipyretic	Metamizole	1gm/2ml, 30ml
1	NSAIDs	Analgesic/Antipyretic	Piroxicam	0mg/ml, 1ml
1	NSAIDs	Analgesic/Antipyretic	Ketorolac tromethamine	60mg/2ml, 30mg/ml, 1ml
1	NSAIDs	Analgesic/Antipyretic	Aceclofenac	150mg/ml, 1ml
1	NSAIDs	Analgesic/Antipyretic	Paracetamol	75mg/ml, 2ml, 150mg/ml, 10ml, 10mg/ml, 50ml
1	NSAIDs	Analgesic/Antipyretic	Tramadol hydrochloride	50mg/ml, 1ml, 2ml
1	NSAIDs	Analgesic/Antipyretic	Lysine acetylsalicylate	0.9g, 1.8g
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Famotidine	20mg/ 2ml, 200mg/ 20ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Dicyclomine	10mg/ml, 2ml, 20mg/ 2ml, 2ml, 100mg/ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Esomeprazole	40mg
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Hyoscine Butylbromide	20mg/ml, 1ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metadoxine	60mg/5ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metoclopramide	10mg/2ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	L-Ornithine L-Aspartate	5mg/10ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Omeprazole	40mg
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Cimetidine	100mg/ml, 2ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Pantoprazole	40mg
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Ranitidine	50mg/2ml, 10ml, 30ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Lansoprazole	30mg
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Ondansetron	2mg/ml-2ml, 4 mg/ml-2 ml, 10ml, 30ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Palonosetron HCL	0.25mg/5ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Metoclopramide HCL 5 mg	2ml, 10ml, 30ml
1	Anti-Ulcerants/Antacid/Anti-Emetics/Laxatives	General	Granisetron	1mg/1ml, 1mg/5ml, 3mg/ml, 4mg/ml
1	Anti-Malarial	General	Quinine Dihydrochloride	100mg/ml, 2ml, 250mg/2ml, 300mg/ml, 1ml & 2ml, 400mg/4ml
1	Anti-Malarial	General	Artemether	20mg/ml, 80mg, 150mg/2ml
1	Anti-Malarial	General	Artesunate	30mg, 60mg, 120mg, 180mg, 150mg & 240mg
1	Anti-Malarial	General	Chloroquine Phosphate	40mg, 64.5mg
1	Anti-Malarial	General	Chloroquine 40mg/ml	30ml, 5ml
1	Anti-Malarial	General	α - βArteether	75mg, 150mg
1	Anaesthetics	General	Bupivacaine+ Dextrose	5mg, 80mg, 4ml
1	Anaesthetics	General	Bupivacaine 0.5%	4ml, 10ml, 20ml
1	Anaesthetics	General	Lignocaine + Adrenaline	60mg + 180mg/30ml
1	Anaesthetics	General	Ketamine Hydrochloride	10mg/ml, 20ml, 50mg/ml, 10ml
1	Anaesthetics	General	Lidocaine HCL + Epinephrine	36mg + 0.0225mg
1	Anaesthetics	General	Lidocaine	1%, 5ml, 2%, 20ml, 30ml, 50ml
1	Anaesthetics	General	Atracurium	10mg/ml, 2.5ml, 10mg/ml, 5ml
1	Anaesthetics	General	Succinylcholine Chloride	50mg/2ml, 10ml, 200mg
1	Anaesthetics	General	Pancuronium	4mg/2ml
1	Anaesthetics	General	Droperidol	2.5mg, 5mg
1	Anaesthetics	General	Thiopentone Sodium	500mg, 1g
1	Antidotes	General	Dimercaprol	50mg/ml 2ml
1	Antidotes	General	Pralidoxime Chloride	200mg, 500mg/20ml
1	Musculo-Skeletal Disorder	General	Pipecuronium Bromide	2mg/ml
1	Musculo-Skeletal Disorder	General	Diclofenac Sodium	75mg/3ml
1	Musculo-Skeletal Disorder	General	Meloxicam	15mg/1.5ml
1	Musculo-Skeletal Disorder	General	Drotaverine	20mg/ml, 2ml
1	Musculo-Skeletal Disorder	General	Parecoxib	40mg/2ml
1	Musculo-Skeletal Disorder	General	Ibuprofen	5mg/ml, 2ml
1	Musculo-Skeletal Disorder	General	Thiocolchicoside	4mg/2ml
1	Neuromuscular Blockade	General	Sugammadex	100mg/ml, 2ml & 5ml
1	Muscle Relaxant	General	Tolperisone Hydrochloride & Lidocaine	100mg + 2.5mg, 1ml
1	Muscle Relaxant	General	Vecuronium Bromide	4mg, 10mg, 20mg
1	Muscle Relaxant	General	Rocuronium Bromide	10mg/ml, 5ml
1	Muscle Relaxant	General	Glycopyrrolate	200mcg/ml 1ml & 3ml
1	Muscle Relaxant	General	Dantrolene	20mg
1	Endocrine System	General	Methylprednisolone Acetate	40mg/ml
1	Endocrine System	General	Terlipressin	1mg/10ml
1	Endocrine System	General	Vasopressin	10Units, 20Units, 40Units
1	Endocrine System	General	Levothyroxine Injection	200mcg/ml, 1ml
1	Endocrine System	General	Methylprednisolone Sodium Succinate Powder	20mg, 40mg, 120mg, 125mg, 500mg, 1g
1	Endocrine System	General	Octreotide	50mcg/ml, 1ml & 100mcg/ml, 1ml
1	Endocrine System	General	Somatostatin	3000mcg, 250mcg
1	Endocrine System	General	Desmopressin	2.5ml, 4mcg/ml
1	Hepatic Stimulant	General	Essential Phospholipids	250mg/5ml
1	Respiratory	General	Caffeine Citrate	10mg/ml, 1ml & 2ml, 20mg/ml, 1ml & 2ml
1	Respiratory	General	Aminophylline	250mg/10ml
1	Respiratory	General	Ambroxol HCL	15mg/2ml
1	Respiratory	General	Etofylline + Theophylline	2ml
1	Respiratory	General	Bromhexine HCL	4mg/2ml
1	Available On Request	General	2-Pyridine Aldoxime Methiodide 25 mg/ml	20 ml amp
1	Available On Request	General	Methyl Ergometrine maleate	1 ml amp
1	Available On Request	General	Sod. Ascorbate IP	20ml, 50ml
1	Available On Request	General	Adrenochrome Monosemicarabzone 5mg	10 ml vial
1	Pre-Filled Syringe	Container Type: 0.6ml	Enoxaparin Sodium Injection Ip	60mg
1	Pre-Filled Syringe	Container Type: 5ml	Dobutamine Injection USP	50mg/ml
1	Pre-Filled Syringe	Container Type: 5ml	Dopamine Hydrochloride Injection USP	40mg/ml
1	Pre-Filled Syringe	Container Type: 1ml & 5ml	Heparin Injection BP	5000IU
1	Pre-Filled Syringe	Container Type: 1ml & 5ml	Heparin Injection Bp	1000IU
1	Pre-Filled Syringe	Container Type: 2ml	Adenosine Injection USP	3mg
1	Pre-Filled Syringe	Container Type: 4ml	Sterile Noradrenaline Concentrate Bp	2mg
1	Pre-Filled Syringe	Container Type: 1ml	Glycopyrrolate Injection USP	0.2mg
1	Pre-Filled Syringe	Container Type: 5ml	Neostigmine Injection	0.5mg
1	Pre-Filled Syringe	Container Type: 5ml	Tranexamic Acid Injection Bp	100mg
1	Pre-Filled Syringe	Container Type: 1ml, 2ml, 4ml & 5ml	Oxytocin Injection Bp	5IU
1	Pre-Filled Syringe	Container Type: 5ml	Iron Sucrose Injection Bp	20mg
1	Pre-Filled Syringe	Container Type: 3ml	Vitamin B1, B6 & B12 Injection	---
1	Pre-Filled Syringe	Container Type: 2ml	Sodium Hyaluronate Injection	1.0W/V
1	Pre-Filled Syringe	Container Type: 1ml, 2ml, 5ml & 10ml	Sodium Chloride Injection Usp	9mg
1	Pre-Filled Syringe	Container Type: 1ml, 2ml, 5ml & 10ml	Sterilized Water for Injection Bp	---
1	Pre-Filled Syringe	Container Type: 4ml	Labetalol Injection Bp	5mg
1	Pre-Filled Syringe	Container Type: 1, 2, 3, 5 ml	Granisetron Hydrochloride Injection USP	1mg
1	Pre-Filled Syringe	Container Type: 2ml	Isoxsuprine Hydrochloride Injection	5mg
1	Pre-Filled Syringe	Container Type: 2ml, 4ml	Clindamycin Injection USP	150mg
1	Pre-Filled Syringe	Container Type: 2ml, 30ml	Methylcobalamin & Multivitamin Injection	1000mcg
1	Pre-Filled Syringe	Container Type: 1ml	Terbutaline	0.5 mg
1	Pre-Filled Syringe	Container Type: 2ml	HydroxypropylMethylcellulose Ophthalmic Solution USP	2% W/V
1	Pre-Filled Syringe	Container Type: 0.25ml	Di. Sod. E.D.T. A	37.5mg
1	Pre-Filled Syringe	Container Type: 2ml	Pancuronium Injection BP	2mg
1	Pre-Filled Syringe	Container Type: 2ml	Torsemide Injection	10mg
1	Liquid Inhalation Anesthesia	General	Sevoflurane	50ml, 250ml
1	Liquid Inhalation Anesthesia	General	Isoflurane	30ml, 100ml, 250ml
1	Liquid Inhalation Anesthesia	General	Adrenaline (Ephinephrine)	1ml
1	Liquid Inhalation Anesthesia	General	Halothane	250ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Clotrimazole & Lignocaine Ear Drops	15ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ciprofloxacin Opthalmic Solution U.S.P. Eye & Ear Drops	10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Gentamicin Eye & Ear Drops	10ml & 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Gentamicin & Dexamethasone Eye & Ear Drops	10ml & 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ofloxacin Opthalmic Solution U.S.P. Eye & Ear Drops	10ml & 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ofloxacin & Dexamethasone Ophthalmic Solution U.S.P. Eye & Ear Drops	10ml & 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Carboxymethyl Cellulose Ip. Eye Drops	10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Moxifloxacin Ip. Eye Drops	5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Fluorometholone Acetate Ophthalmic Suspension Eye Drops	5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Loteprednol Etabonate Suspension Eye Opthalmic Drops	5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Moxifloxacin+ Loteprednol Etabonate Opthalmic Suspension Eye Drops	5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ofloxacin + Beclomethasone Ear drops	5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ciprofloxacin Ophthalmic Solution	0.3 w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Gentamycin Ophthalmic Solution	0.3 w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Moxifloxacin Hydrochloride Ophthalmic Solution	0.5% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Tobramycin+ Dexamethasone Ophthalmic Suspension	0.3% w/v +0.1% w/v, 5ml & 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ketorolac Ophthalmic Solution	0.5% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Prednisolone Acetate Ophthalmic Suspension	1% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Timolol Tromethamine Solution	0.25% w/v & 0.5% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Dexa Solution	1% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Carboxymethyl cellulose sodium Lubricant Eye Drops	0.5% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Zinc Sulphate Eye Drops	0.25% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Neomycin + Dexamethasone Ophthalmic Solution	0.35% w/v +0.1% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Dorzolamide Eye Drops	2.0% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Hydroxypropyl methyl Cellulose Ophthalmic Solution	0.3% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Chloramphenicol Ophthalmic Solution	0.5% w/v, 5ml & 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Flurbiprofen Sodium Ophthalmic Solution	0.03% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Dexamethasone + Chloramphenicol Eye Drops	0.1% w/v, 0.5% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ciprofloxacin + Dexamethasone Combination	0.3% w/v + 0.1%w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Diclofenac Sodium Ophthalmic Solution	0.1%w/v, 5ml & 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Gentamycin + Dexamethasone Ophthalmic Solution	0.3%w/v + 0.1%, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Dexamethasone + Neomycin + polymyxinB	1mg + 3.5mg + 6000Units/ml, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Atropine + Dexamethasone	1% w/v + 0.1% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Betamethasone + Neomycin	0.1% w/v + 0.5 w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Gatifloxacin Ophthalmic Solution	0.3% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ketorolac Tromethamine	0.5% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Neomycin + Dexamethasone	0.35% w/v + 0.1% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Ofloxacin Eye Drops	0.3% w/v, 3ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Brimonidine Tartrate + Timolol Maleate	2mg, ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Bimatoprost	0.01% w/v, 3ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Oxymetazoline HCL	0.03% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Fluromethalone + Neomycin	0.1% w/v + 0.35% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Naphazoline HCL +Chlorpheniramine Maleate + Isotonic Solution	0.5% + 0.5 mg/1ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Dextran + Hydroxypropyl methyl Cellulose	70mg + 3mg
1	Ophthalmic (Eye) / Otic (Ear)	General	Olopatadine HCL	0.1% w/v, 5ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Latanoprost Eye Drops	0.005% w.v, 2.5 ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Carmellose Sodium Eye Drops	0.5% w/v, 10ml
1	Ophthalmic (Eye) / Otic (Ear)	General	Moxifloxacin + Dexamethasone	0.5% w/v + 0.1% w/v
1	Ophthalmic (Eye) / Otic (Ear)	General	Hypromellose Eye Drops	0.3% w/v, 10ml
1	B- Lactam Antibiotics	Penicillin	Tobramycin	40mg, ml
1	B- Lactam Antibiotics	Penicillin	Benzathinepenicillin	600Mn IU, 1.2Mn IU
1	B- Lactam Antibiotics	Penicillin	Ampicillin Sodium	100mg, 250mg, 500mg, 1g
1	B- Lactam Antibiotics	Penicillin	Ampicillin + Cloxacillin	250mg, 500mg
1	B- Lactam Antibiotics	Penicillin	Ampicillin + Sulbactam	750mg + 250mg, 1g + 500mg, 2g + 1g
1	B- Lactam Antibiotics	Penicillin	Ticarcillin + clavulanic Acid	1.6g, 3.1g
1	B- Lactam Antibiotics	Penicillin	Timentin & Clavulanate Potassium Injection	3gm + 0.2g/1.5 + 0.1
1	B- Lactam Antibiotics	Penicillin	Cloxacillin Sodium	250mg, 500mg, 1g
1	B- Lactam Antibiotics	Penicillin	Oxacillin Sodium	500mg, 1g
1	B- Lactam Antibiotics	Penicillin	Amoxycillin	250mg, 500mg, 1g
1	B- Lactam Antibiotics	Penicillin	Flucloxacillin Sodium	250mg, 500mg, & 1gm
1	B- Lactam Antibiotics	Penicillin	Piperacillin	1g, 2g, 4g
1	B- Lactam Antibiotics	Penicillin	Amoxicillin + Clavulanate Potassium	0.3g, 0.6g, 1.2g & 2.4g
1	B- Lactam Antibiotics	Penicillin	Piperacillin Sodium + Tazobactam Sodium	2.25g, 4.5g
1	B- Lactam Antibiotics	Penicillin	Oxytetracycline	50mg/ml
1	B- Lactam Antibiotics	Cephalosporin	Cefuroxime & Tazobactam	1.125gm
1	B- Lactam Antibiotics	Cephalosporin	Cefalotin	1g, 1.5g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefpirome	250mg, 500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefepime	250mg, 500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefpirome+sulbactam	750mg, 1.5g, 3g
1	B- Lactam Antibiotics	Cephalosporin	Cefixime + Sulbactam	750mg, 1.5g, 3g
1	B- Lactam Antibiotics	Cephalosporin	Cephaloridine	500mg, 1g
1	B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Tazobactam	500mg + 62.5mg, 1g + 125mg
1	B- Lactam Antibiotics	Cephalosporin	Ceftazidime	250mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefmetazole	500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefepime + Tazobactam	1g + 125mg, 500 + 62.5mg
1	B- Lactam Antibiotics	Cephalosporin	Ceftriaxone	125mg, 250mg, 500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefoperazone + Sulbactam	500mg, 1.5g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefoperazone	500mg, 1000mg, 1g
1	B- Lactam Antibiotics	Cephalosporin	Cefotaxime + Sulbactam	750mg, 1g, 1.5g
1	B- Lactam Antibiotics	Cephalosporin	Cefotaxime	250mg, 500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Ceftriaxone+sulbactam	500mg, 750mg, 1g, 1.5g
1	B- Lactam Antibiotics	Cephalosporin	Ceftriaxone + Tazobactam	1.125g, 2.250g
1	B- Lactam Antibiotics	Cephalosporin	Ceftizoxime	500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cefuroxime	250mg, 750mg, 1.5g
1	B- Lactam Antibiotics	Cephalosporin	Cefoxitin	1g, 2g, 10g
1	B- Lactam Antibiotics	Cephalosporin	Cefotetan	1g, 10g
1	B- Lactam Antibiotics	Cephalosporin	Cefamandole Nafate	1gm
1	B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Sulbactam	750mg, 1.5gm
1	B- Lactam Antibiotics	Cephalosporin	Cefodizime	500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Ceftazidime + Avibactam	2.5gm
1	B- Lactam Antibiotics	Cephalosporin	Cefazolin	125mg, 250mg, 500mg, 1g
1	B- Lactam Antibiotics	Cephalosporin	Cefotiam HCL	500mg, 1g
1	B- Lactam Antibiotics	Cephalosporin	Cefbuperazone	500mg, 1g
1	B- Lactam Antibiotics	Cephalosporin	Cefpiramide	500mg, 1g, 2g
1	B- Lactam Antibiotics	Cephalosporin	Cephalothin	1gm, 1.5gm, 2gm
1	B- Lactam Antibiotics	Cephalosporin	Cefuzonam	250mg, 500mg, 1g
1	B- Lactam Antibiotics	Monobactam	Sulbactam	500mg, 1g, 2gm
1	B- Lactam Antibiotics	Monobactam	Aztreonam & Avibactam	--
1	B- Lactam Antibiotics	Monobactam	Aztreonam	250mg, 500mg, 1g, 2g
1	B- Lactam Antibiotics	Carbapenems	Meropenem	500mg, 1g, 2g
1	B- Lactam Antibiotics	Carbapenems	Biapenem	0.3g
1	B- Lactam Antibiotics	Carbapenems	Ertapenem	1g
1	B- Lactam Antibiotics	Carbapenems	Doripenem	500mg, 1g
1	B- Lactam Antibiotics	Carbapenems	Meropenem + Tazobactam	562.5mg + 1.125g
1	B- Lactam Antibiotics	Carbapenems	Meropenem + Sulbactam	250mg + 125mg, 500mg + 250mg, 1g + 500mg
1	B- Lactam Antibiotics	Carbapenems	Imipenem + Cilastatin	250mg + 250mg, 500mg + 500mg
1	General Dry Injectables	General	Anidulafungin For Injection 50 Mg	50mg, 100mg
1	General Dry Injectables	General	Aztreonam Injection	500mg, 1000mg, 2000mg
1	General Dry Injectables	General	For Injection 50 Caspofungin Mg	50mg, 70mg
1	General Dry Injectables	General	Clarithromycin Injection	500mg
1	General Dry Injectables	General	Colistimethate Sodium Injection	1,000,000 IU, 2,00,0000 IU, 5,00,0000 IU
1	General Dry Injectables	General	Doxycycline For Injection USP	10mg
1	General Dry Injectables	General	Hydrocortisone Sodium Succinate Injection	100mg, 200mg
1	General Dry Injectables	General	Micafungin Sodium for Injection	100mg
1	General Dry Injectables	General	Rabeprazole Injection	20mg
1	General Dry Injectables	General	Teicoplanin Injection	200mg, 400mg
1	General Dry Injectables	General	Ulinastatin For Injection 1,00,000 Iu	50,000 IU, 1,00,000 IU
1	General Dry Injectables	General	Chloramphenicol Sodium Succinate Injection	1.0gm
1	General Dry Injectables	General	Azithromycin For Infusion Bp	500mg
1	General Dry Injectables	General	Ganciclovir Injection	500mg
1	Dental Cartridge 1.8ml	General	Articaine 4% And Adrenaline 1:100,000 Injection	(Arthil-4%)
1	Dental Cartridge 1.8ml	General	Lidocaine Hydrochloride Injection B	(Jetlox-2%)
1	Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride Injection 3%	(Mephil-3%)
1	Dental Cartridge 1.8ml	General	Lignocaine Hydrochloride and Adrenaline Injection BP	(Jetlox-2% A)
1	Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 36.00 Mg (3%) + Noradrenaline Tartrate 0.036 Mg	(Corresponding Amount in Noradrenaline 0.018 Mg)
1	Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 2%	---
1	Dental Cartridge 1.8ml	General	Mepivacaine Hydrochloride 36.00 Mg (3%) + ADRENALINE 0.018 Mg	---
1	Dental Cartridge 1.8ml	General	Lignocaine HCL 24.64 Mg/Ml. (2%) + Adrenaline 0.01mg/Ml. (1:80,000)	---
1	Ointments and Creams	General	Aceclofenac 1.5 % w/w, Linseed oil 3 % w/w, Methyl Salicylate 10 % w/w, Menthol 5 % w/w, Capsaicin 0.01 % w/w, Benzyl Alcohol 1 % w/w (Preservative) gel	---
1	Ointments and Creams	General	Azelaic acid cream 20 % w/w	---
1	Ointments and Creams	General	Beclomethasone dipropionate 0.025 % w/w + Neomycin sulphate 0.5 % w/w + clotrimazole 1 % w/w cream	---
1	Ointments and Creams	General	Beclomethasone dipropionate 0.025 % w/w + Neomycin sulphate 0.5 % w/w + Miconazole 2 % w/w cream	---
1	Ointments and Creams	General	Betamethasone Valerate 0.12 % + Neomycin sulphate 0.5 % w/w + Chlorocresol 0.1 % w/w (as preservative) Cream	---
1	Ointments and Creams	General	Betamethasone Dipropionate eq. to Betamethasone 0.05 % w/w cream	---
1	Ointments and Creams	General	Betamethasone Dipropionate eq. to Betamethasone 0.05 % w/w + Neomycin sulphate 0.5 % w/w + Clotrimazole 1 % w/w Cream	---
1	Ointments and Creams	General	Betamethasone Dipropionate 0.0643 % w/w + Gentamicin sulphate eq. to Gentamicin 0.1 % w/w + Tolnaftate 1 % w/w + Iodochlorhydroxyquinoline 1 % w/w + Chlorocresol 0.1 % w/w cream	---
1	Ointments and Creams	General	Clotrimazole cream 1 % & 2 % w/w Skin cream and Vaginal cream with applicator	---
1	Ointments and Creams	General	Clindamycin phosphate 1 % w/w gel	---
1	Ointments and Creams	General	Clindamycin phosphate 1.0 %w/w, Nicotinamide 4.0% w/w gel	---
1	Ointments and Creams	General	Clindamycin phosphate 1.0 % w/w, Adapalene 0.1 % w/w gel	---
1	Ointments and Creams	General	Clobetasol Propionate 0.05 % w/w +Neomycin sulphate eq to Neomycin 0.1 %w/w + Tolnaftate 1 % w/w +Lodochlorohydroxyquinoline 1 % w/w + Ketoconazole 2 % w/w Cream	---
1	Ointments and Creams	General	Diclofenac Diethylamine 1.16 % eq to Diclofenac sodium 1 % w/w gel	---
1	Ointments and Creams	General	Diclofenac Diethylamine 1.16 % w/w, Linseed oil 3 % w/w, Menthol 5 % w/w, Methyl salicylate 10 % w/w, Benzyl alcohol 1 % w/w (as preservative) Gel	---
1	Ointments and Creams	General	Diclofenac Diethylamine 1.16 % w/w, Linseed oil 3 % w/w, Menthol 0.5 % w/w, Methyl salicylate 10 % w/w, Benzyl alcohol 1 % w/w (as preservative) Gel	---
1	Ointments and Creams	General	Diclofenac Diethylamine 1.16 % w/w, Linseed oil 3 % w/w, Menthol 5 % w/w, Methyl salicylate 10 % w/w, Capsaicin 0.025 % w/w, Benzyl alcohol 1 % w/w (as preservative) Gel	---
1	Ointments and Creams	General	Hydrocortisone Acetate Cream 1 % w/w	---
1	Ointments and Creams	General	Hydrocortisone Acetate 0.5 % w/w, Lignocaine HCl 3 % w/w Cream	---
1	Ointments and Creams	General	Ketoconazole cream 2 % w/w	---
1	Ointments and Creams	General	Ketoconazole 2 % w/w + Gentamicin sulphate eq. to Gentamicin 0.1 % w/w + Fluocinolone Acetonide 0.01 % w/w cream	---
1	Ointments and Creams	General	Povidone Iodine 5 % w/w ointment	---
1	Ointments and Creams	General	Povidone Iodine 5 % w/w + Metronidazole 1 % w/w ointment	---
1	Ointments and Creams	General	Povidone Iodine 5 % w/w +Ornidazole 1 % w/w ointment	---
1	Ointments and Creams	General	Permethrin cream 5 % w/w	---
1	Ointments and Creams	General	Phenylephrine Hydrochloride 0.1 % w/w + Beclomethasone Dipropionate 0.025 % w/w + Lignocaine HCL 2.5 % w/w cream	---
1	Ointments and Creams	General	Luliconazole cream 1% w/w	---
1	Mouthwash/Toothpaste/Lotion	General	Beclomethasone dipropionate 0.025% w/w + clotrimazole 1% w/w lotion	---
1	Mouthwash/Toothpaste/Lotion	General	Chlorhexidine gluconate 0.2 % w/v + Menthol 0.1 % w/v + Chlorobutanol 0.1 % w/v Mouthwash	---
1	Mouthwash/Toothpaste/Lotion	General	Calamine Lotion (Calamine 15 % w/v + Zinc Oxide 5 % w/v)	---
1	Mouthwash/Toothpaste/Lotion	General	Cetyl alcohol 2.65 % w/w + Stearyl Alcohol 0.26 % w/w Lotion (Cleanser)	---
1	Mouthwash/Toothpaste/Lotion	General	Clotrimazole lotion 1 % w/v	---
1	Mouthwash/Toothpaste/Lotion	General	Povidone iodine solution 5 % w/v, 7.5 % w/v, 10 % w/v	---
1	Mouthwash/Toothpaste/Lotion	General	Luliconazole Lotion 1 % w/v	---`;

function generateSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const catsArray = [
  {
    id: 1,
    name: "Injectables",
    slug: "injectables",
    description: "Various injectable pharmaceutical formulations.",
    productCount: 0
  },
  {
    id: 2,
    name: "Ointments and Creams",
    slug: "ointments-and-creams",
    description: "Specialized cream and ointment pharmaceutical treatments.",
    productCount: 0
  }
];

const products = [];
let catIdCounter = 3;
let pIdx = 0;

injectablesRaw.trim().split('\n').forEach(line => {
  const parts = line.split('\t');
  if (parts.length >= 5) {
    const rawSubCategory = parts[1].trim(); 
    const classCategory = parts[2].trim();
    const productName = parts[3].trim();
    const strength = parts[4].trim();

    const isOintment = rawSubCategory === "Ointments and Creams";
    const cat = catsArray[isOintment ? 1 : 0];
    
    products.push({
      id: ++pIdx,
      categoryId: cat.id,
      categoryName: cat.name,
      categorySlug: cat.slug,
      subCategory: rawSubCategory,
      name: productName,
      slug: generateSlug(productName) + '-' + pIdx,
      description: `${classCategory} - ${productName}`,
      strength: strength !== '---' ? strength : '',
      genericName: classCategory
    });
    
    cat.productCount++;
  }
});
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
128	GENERAL	LIQUID	Paracetamol Paediatric Oral Susp. IP 250MG	5mg/5ml
129	GENERAL	LIQUID	Paracetamol Paediatric Oral Susp. IP 125MG	2.5mg/5ml
130	GENERAL	LIQUID	Ibuprofen and Paracetamol Susp. (100+162.5)	2gm/5ml
131	GENERAL	LIQUID	Albendazole Oral Suspension IP 200mg/5ml	4+5+50mg/5ml
132	GENERAL	LIQUID	Ondansentron oral Suspension	125mg/5ml
133	GENERAL	LIQUID	Cetirizine Syrup 5mg/5ml	100mg/5ml
134	GENERAL	LIQUID	Levocetirizine Dihydrochloride Syrup 2.5mg/5ml	200mg/5ml
135	GENERAL	LIQUID	Cyproheptidine Hydrochloride Syrup IP	1mg/ml
136	GENERAL	LIQUID	Detromethorphan HBR + Bromhexine HBR +Ammonium Chloride Syrup	50mg/5ml
137	GENERAL	LIQUID	Erythromycin Oral Suspension USP 125mg	100mg/5ml
138	GENERAL	LIQUID	Azithromycin Oral Suspension IP 100mg/5ml	500mg/5ml
139	GENERAL	LIQUID	Azithromycin Oral Suspension IP 200mg/5ml	200gm/5ml
140	GENERAL	LIQUID	Domperidone Suspension IP	250+5+2mg/5ml
141	GENERAL	LIQUID	Ofloxacin Oral Suspension IP (50mg/5ml)	
142	GENERAL	LIQUID	Ofloxacin Oral Suspension IP (100mg/5ml)	
143	GENERAL	LIQUID	Piracetam Syrup (500mg/5ml)	
144	GENERAL	LIQUID	Sodium Valporate Oral Solution IP	
145	GENERAL	LIQUID	Paracetamol 250+Phenylehrine HCL 5 + CPM 2mg	
146	GENERAL	LIQUID	Ambroxol HCL-15+Guaiphenesin-50+Terbutaline- 1.25+Menthol-0.5 Syrup	
147	GENERAL	LIQUID	Paracetamol 250+Phenylehrine HCL-5+Cetirizine-2.5	
148	GENERAL	LIQUID	Dextromethorphan-10+Phenylephrine-5+CPM-5 Syrup	
149	GENERAL	LIQUID	Dextromethorphan-15+Phenylephrine-5+CPM-5 Syrup	
150	GENERAL	LIQUID	CYPROHEPTADINE HCL-2 AND TRICHOLINE CITRATE-275 SYRUP	
151	GENERAL	EXTERNAL	Clotrimazole Cream IP 1% w/w	
152	GENERAL	EXTERNAL	Ketoconazole Cream 2% w/w	
153	GENERAL	EXTERNAL	Terbinafine Hydrochloride Cream 1% w/w	
154	GENERAL	EXTERNAL	Luliconazole Cream 1% w/w	
155	GENERAL	EXTERNAL	Clotrimazole Cream IP 1% w/w	
156	GENERAL	EXTERNAL	Ketoconazole Cream 2% w/w	
157	GENERAL	EXTERNAL	Terbinafine Hydrochloride Cream 1% w/w	
160	GENERAL	EXTERNAL	Clobetasole Propionate cream IP 0.05% + Chlorcresol 0.1% w/w	
158	GENERAL	EXTERNAL	Clotrimazole (1.00 % w/w/) +Beclomethasone (0.025 w/w) + Neomycin (0.5% w/w) , Chlorcresol ( 0.1% w/w)Cream	2-PROPANOL, 1-PROPANOL AND MACETRONIUM ES
159	GENERAL	EXTERNAL	Povidone Iodine Ointment USP 5%	Oral Rehydration Salt IP
162	GENERAL	TABLET	Clobetasol Propionate Topical Solution USP (0.05% w/w)	ISAPGOL HUSK POWDER
163	GENERAL	TABLET	Ketoconazole Sampoo (2% w/v)	Chlolecalciferol Granules (60,000 IU)
164	GENERAL	TABLET	Gentamycin Sulphate Cream USP 0.03%	Cefixime Dispersible Tablets 50mg
165	GENERAL	TABLET	Miconazole Nitrate Cream IP 2% w/w	Cefixime Dispersible Tablets 100mg
166	GENERAL	GENERAL	Mometasone Fuorate IP 0.1% w/w	Cefixime Dispersible Tablets IP 200mg
167	GENERAL	EXTERNAL	Permethrine Cream 5% w/w	Cefixime Dispersible Tablets IP 400mg
168	GENERAL	EXTERNAL	Permethrin Lotion 5% w/w	Cefixime Dispersible Tablets IP 500mg
169	GENERAL	EXTERNAL	Choline Salicylate solution eq. To Choline Salicylate 8.7 % w/w + Lignocain HCL 2.0 % w/w +Benzalkonium CL 0.01%	Cefixime Tablets IP 200 mg
170	GENERAL	EXTERNAL	Cefadroxil Dispersible Tablets IP 250mg	Cefixime Tablets IP 400 mg
171	GENERAL	EXTERNAL	Cefadroxil Tablets IP 500mg	Cefixime Tablets IP 500 mg
172	GENERAL	EXTERNAL	Cefuroxime Axetil Tablets IP 250mg	Cefadroxil Tablets IP 250mg (Film coated)
173	BETA	EXTERNAL	Cefuroxime Axetil Tablets IP 500mg	Cefadroxil Tablets IP 500mg (Film coated)
174	BETA	EXTERNAL	Cefixime and Ofloxacin Tablets	Cefadroxil Dispersible Tablets IP 125mg
175	BETA	EXTERNAL	Cefpodoxime Proxetil Dispersible Tablets 50 mg	Uncoated
176	BETA	POWDER	Cefpodoxime Proxetil Dispersible Tablets 100 mg	Uncoated
177	BETA	POWDER	Cefpodoxime Proxetil Dispersible Tablets 200mg	Uncoated
178	BETA	POWDER	Amoxycilline and Potassium Clavulanate Tablets (500+125)	Uncoated
179	BETA	TABLET	Amoxycilline and Potassium Clavulanate Tablets (875 + 125)	Uncoated
180	BETA	TABLET	Amoxycillin Dispersible Tablets 125mg	Film Coated
181	BETA	TABLET	Amoxycillin Dispersible Tablets 250mg	Film Coated
182	BETA	TABLET	Amoxycillin Dispersible Tablets 500mg	Film Coated
183	BETA	TABLET	Ampicillin Capsuls IP 250mg	Film Coated
184	BETA	TABLET	Ampicillin Capsuls IP 500mg	Film Coated
185	BETA	TABLET	Cephalexin Capsules IP 250mg	Uncoated
186	BETA	TABLET	Amoxicillin Capsules 250mg	Uncoated
187	BETA	TABLET	Amoxicillin Capsules 500mg	Uncoated
188	BETA	TABLET	Ampicillin and Cloxacillin Capsules (250+250)	Film Coated
189	BETA	TABLET	Cefixime Oral Suspension IP 50mg	Film Coated
190	BETA	TABLET	Cefixime Oral Suspension IP 50mg	Film Coated
191	BETA	TABLET	Cefixime Oral Suspension IP 50mg With WFI 20ml	Uncoated
192	BETA	TABLET	Cefixime Oral Suspension IP 50mg With WFI 20ml	Uncoated
193	BETA	TABLET	Cefixime Oral Suspension IP 100mg	Uncoated
194	BETA	TABLET	Cefixime Oral Suspension IP 125mg	Film Coated
195	BETA	TABLET	Artemether + Lumefentrane (180 + 1080)	Film Coated
196	BETA	TABLET	Amoxycilline and Pot. Clavulanate Oral Suspension IP (200+28.5)	Uncoated
197	BETA	TABLET	Amoxycilline and Pot.Clavulanate Oral Suspension IP (125+31.5)	Uncoated
198	GENERAL	TABLET	Amoxycilline and Pot.Clavulanate Oral Suspension IP (400+57)	Uncoated
199	EXTERNAL	TABLET	Cefpodoxime Oral suspension IP 100mg/5ml	NA
200	EXTERNAL	TABLET	Cefpodoxime Oral suspension IP 50mg/5ml	NA
202	EXTERNAL	TABLET	Cefpodoxime Oral suspension IP 50mg/5ml	NA
203	EXTERNAL	CAPSULE	Cefpodoxime Oral suspension IP 50mg/5ml with WFI	NA
204	EXTERNAL	CAPSULE		NA
205	EXTERNAL	CAPSULE		100mg/5ml
206	EXTERNAL	EXTERNAL		50mg/5ml
207	EXTERNAL	DRY SYRUP		50mg/5ml
208	POWDER	DRY SYRUP		50mg/5ml
209	POWDER	DRY SYRUP		50mg/5ml
210	POWDER	DRY SYRUP		50mg/5ml
211	TABLET	DRY SYRUP		50mg/5ml
212	TABLET	DRY SYRUP		50mg/5ml
213	BETA	DRY SYRUP		100mg/5ml
214	BETA	DRY SYRUP		125mg/5ml
215	BETA	DRY SYRUP		180 + 1080 / Bottle
216	BETA	DRY SYRUP		200+28.5mg /5ml
217	BETA	DRY SYRUP		125+31.5mg/ 5ml
218	BETA	DRY SYRUP		400+57mg/ 5ml`;

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

const tabsCatId = catIdCounter++;
catsArray.push({
  id: tabsCatId,
  name: "Tablet/capsules",
  slug: "tablet-capsules",
  description: "Solid oral dosage forms including tablets and capsules.",
  productCount: 0
});

tabletsRaw.trim().split('\n').forEach(line => {
  const parts = line.split('\t');
  if (parts.length >= 4) {
    const rawSubCat = parts[2].trim();
    const pName = parts[3].trim();
    if (pName && pName.length > 1) {
      products.push({
        id: ++pIdx,
        categoryId: tabsCatId,
        categoryName: "Tablet/capsules",
        categorySlug: "tablet-capsules",
        subCategory: rawSubCat,
        name: pName,
        slug: generateSlug(pName) + '-' + pIdx,
        description: `Area: ${parts[1]}, Dosage: ${rawSubCat}`,
        strength: parts.length > 4 ? parts[4].trim() : '',
      });
      catsArray.find(c => c.id === tabsCatId).productCount++;
    }
  }
});

const apiCatId = catIdCounter++;
catsArray.push({
  id: apiCatId,
  name: "APIs(Active Pharmaceutical Ingredients)",
  slug: "apis",
  description: "Active Pharmaceutical Ingredients for pharmaceutical manufacturing.",
  productCount: 0
});

const apisLines = apisRaw.trim().split('\n');
for (let i = 0; i < apisLines.length; i += 3) {
  if (i + 2 < apisLines.length) {
    products.push({
      id: ++pIdx,
      categoryId: apiCatId,
      categoryName: "APIs(Active Pharmaceutical Ingredients)",
      categorySlug: "apis",
      name: apisLines[i + 1].trim(),
      slug: generateSlug(apisLines[i + 1].trim()) + '-' + pIdx,
      description: `API Element - ${apisLines[i + 2].trim()}`,
      genericName: apisLines[i + 1].trim(),
      specifications: apisLines[i + 2].trim()
    });
    catsArray.find(c => c.id === apiCatId).productCount++;
  }
}

const newOintments = [
  { name: "Acyclovir & Hydrocortisone cream", comp: "Acyclovir BP: 50 mg, Hydrocortisone BP: 10 mg", pres: "15 gm" },
  { name: "Acyclovir cream 5%", comp: "Acyclovir BP: 50 mg", pres: "15 gm" },
  { name: "Betamethasone, Clotrimazole & Gentamicin Cream", comp: "Betamethasone Dipropionate USP Equivalent to Betamethasone: 0.5 mg, Clotrimazole BP: 10 mg, Gentamicin Sulphate BP Equivalent to Gentamicin: 1 mg", pres: "15 gm" },
  { name: "Beclomethasone Dipropionate, Clotrimazole, Neomycin Sulphate Cream", comp: "Beclomethasone Dipropionate USP 0.025%, Clotrimazole BPP 1.0%, Neomycin Sulphate USP 0.5%", pres: "15gm" },
  { name: "Clobetasol Propionate Cream USP", comp: "Clobetasol Propionate USP: 0.5 mg", pres: "30 gm" },
  { name: "Clotrimazole cream 1%", comp: "Clotrimazole USP: 10 mg", pres: "20 gm" },
  { name: "Chondroitin sulphate & Meloxicam cream", comp: "Chondroitin Sulphate Sodium: 50 mg, Meloxicam: 10 mg", pres: "50 gm" },
  { name: "Dexpanthenol 5% & Chlorhexidine 0.5% Cream", comp: "Dexpanthenol: 50 mg, Chlorhexidine Hydrochloride: 5 mg", pres: "30 gm" },
  { name: "Fusidic acid & Betamethasone valerate cream", comp: "Fusidic acid BP: 20 mg, Betamethasone Valerate BP equivalent to Betamethasone: 1 mg", pres: "15 gm" },
  { name: "Ketoprofen cream 5%", comp: "Ketoprofen: 50 mg", pres: "30 gm" },
  { name: "Luliconazole Cream 1 %", comp: "Luliconazole: 1%", pres: "15gm" },
  { name: "Lidocaine 2.5 % & Prilocaine 2.5 % Cream", comp: "Prilocaine: 25 mg, Lidocaine: 25 mg", pres: "30 gm" },
  { name: "Mometasone Furoate Cream USP", comp: "Mometasone Furoate USP: 0.1%", pres: "15 gm" },
  { name: "Methylprednisolone Aceponate Cream 0.1%", comp: "Methylprednisolone Aceponate: 1 mg", pres: "15 gm" },
  { name: "Nystatin Cream 100000 IU", comp: "Nystatin USP: 10000 IU", pres: "15 gm" },
  { name: "Pyrithion zinc cream 0.2%", comp: "Pyrithione Zinc: 2 mg", pres: "50 gm" },
  { name: "Silver Sulfadiazine Cream USP", comp: "Silver Sulfadiazine USP 1%", pres: "50 gm" },
  { name: "Sertaconazole Nitrate Cream 2 %", comp: "Sertaconazole Nitrate BP 2.0%", pres: "15gm" },
  { name: "Terbinafine Cream 1 %", comp: "Terbinafine Hydrochloride BP 10 mg", pres: "30 gm" }
];
newOintments.forEach(oint => {
  products.push({
    id: ++pIdx,
    categoryId: 2,
    categoryName: "Ointments and Creams",
    categorySlug: "ointments-and-creams",
    subCategory: "Ointments and Creams",
    name: oint.name,
    slug: generateSlug(oint.name) + '-' + pIdx,
    description: `General - ${oint.name}`,
    specifications: `Each gm contains: ${oint.comp}`,
    strength: oint.pres,
    genericName: "General"
  });
  catsArray[1].productCount++;
});

const hugeOintmentsRaw = `1	Luliconazole Cream 1%w/w
2	Luliconazole Lotion 1%w/v
3	Sertaconazole Nitrate Cream 2% w/w
4	Sertaconazole Nitrate Lotion 2% w/v
5	Sertaconazole and Beclomethasone 0.025%w/w Cream
6	Sertaconazole Nitrate2.0%w/v & Zinc Pyrithione 1.0% v/v Shampoo
7	Eberconazole Nitrate Cream 1.0% w/w
8	Eberconazole Nitrate 1.0% w/w & Mometasone Furoate 0.1% w/w Cream
9	Oxiconazole Nitrate Cream 1%w/w
10	Oxiconazole Nitrate Lotion 1%w/v
11	Amorolfine Cream 0.25%w/w
12	Bifonazole Lotion 1%w/v
13	Bifonazole Cream IP
14	Ciclopirox Olamine Cream 1%w/w
15	Ciclopirox Olamine Lotion 1%w/v
16	Ketoconazole Cream 2%w/w
17	Ketoconazole Lotion 2%w/v
18	Ketoconazole 2%w/v and Beclomethasone 0.025% w/w Cream
19	Ketoconazole 2%w/v and Beclomethasone 0.025% w/v Lotion
20	Ketoconazole & Beclomethasone Dipropionate Shampoo
21	Clotrimazole Cream 2% w/w
22	Clobetasole Propionate Cream 0.05% w/w
23	Clobetasole Lotion 0.05% w/v
24	Clobetasole Propionate Ointment 0.05% w/w
25	Clobetasole and Ketoconazole Cream
26	Clobetasole Propionate and Miconazole Cream
27	Clobetasole 0.05% & Nadifloxacin-1% Cream
28	Clobetasol Propionate & Fusidic Acid Cream
29	Clobetasol propionate, Salicylic Acid, Urea & Lactic Acid Ointment
30	Clobetasole Propionate and Salicylic Acid 6% Ointment
31	Clobetasole Propionate and Salicylic Acid 3% Lotion
32	Clobetasole Propionate and Salicylic Acid 6% Lotion
33	Clobetasole Propionate, Fusidic Acid and Clotrimazole Cream
34	Fluticasone Propionate Ointment 0.05% w/w
35	Fluticasone Cream IP 0.05%w/w
36	Crotamiton Cream IP 10%w/w
37	Crotamiton and Hydrocortisone 0.25%w/w
38	Clobetasol Propionate 0.05%w/w & Calcipotriol 0.005%w/w Ointment
39	Clobetasole with Ammonium Lactate 12% Gel
40	Clarithromycin Gel 1%w/w
41	Minoxidil Topical Solution USP 5%w/v
42	Minoxidil Topical Lotion USP 2%w/v
43	Minoxidil 5%w/v and Finasteride 0.1%w/v Topical Solution
44	Mometasone Topical Lotion 0.1w/v
45	Mometasone Furoate Cream 0.1 % w/w
46	Mometasone Furoate Ointment IP 0.1%w/w
47	Mometasone And Fusidic Acid-2% Cream
48	Mometasone And Terbinafine-1% Cream
49	Mometasone Furoate And Salicylic Acid-5% Ointment
50	Mometasone Furoate , Nadifloxacin & Miconazole Nitrate Cream
51	Halobetasol Propionate Cream 0.05% w/w
52	Halobetasol Propionate Lotion 0.05%w/v
53	Halobetasol and Salicylic Acid 3% Ointment
54	Halobetasol and Salicylic Acid 6% Ointment
55	Halobetasol 0.05%w/w & Mupirocin 2.0% w/w Gel
56	Halobetasol Propionate 0.05% w/w and Miconazole 2% w/w Cream
57	Halobetasol Propionate 0.05% w/w and Fusidic acid 2% w/w Cream
58	Beclomethasone Dipropionate 0.025% Cream
59	Beclomethasone Lotion 0.05%w/w
60	Beclomethasone and Clotrimazole Lotion
61	Beclomethasone and Clotrimazole Cream
62	Beclomethasone0.025% and Neomycin 0.05% Cream
63	Beclomethasone, Econazole Nitrate-1% & Neomycin 0.05% Cream
64	Beclomethasone, Salicylic Acid, Urea, Sodium Lactate & Lactic Acid Ointment
65	Beclomethasone, Clotrimazole & Neomycin Sulphate Cream
66	Fusidic Acid Cream 2%w/w
67	Fusidic Acid and Beclomethasone Cream
68	Mupirocin Ointment IP 2%w/w
69	Fluticasone Propionate & Mupirocin Ointment
70	Beclomethasone Propionate & Mupirocin Ointment
71	Nadifloxacin Gel 1 % w/w
72	Nadifloxacin Cream 1 % w/w
73	Tacrolimus Ointment 0.03%w/w
74	Tacrolimus Ointment 0.1%w/w
75	Clindamycin Phosphate Gel 1% w/w
76	Adapalene 0.1%w/w with Clindamycin Gel
77	Clindamycin 1%w/w and Nicotinamide 4%w/w Gel
78	Clindamycin 1%w/w & Hydrous Benzoyl Peroxide eq. to Anhydrous Benzoyl Peroxide 2.5%w/w Gel
79	Adapalene Gel 0.1%w/w
80	Adapalene and Benzoyl Peroxide Gel
81	Permethrin Cream 5% w/w
82	Acyclovir Cream 5% w/w
83	Diflorasone Diacetate Cream 0.05%
84	Retapamulin Ointment 1.0% w/w
85	Azelaic Acid Cream 15%w/w
86	Azelaic Acid Cream 20%w/w
87	Diclofenac Gel: Diclofenac Diethylamine with Menthol 0.5% w/w, Linseed Oil 3% &Methyl Salicylate -10 % w/w
88	DiclofenacGel: Diclofenac Diethylamine with Menthol 5 % w/w, Linseed Oil 3% & Methyl Salicylate -10 % w/w
89	Anti-Dandruff Lotion: Ketoconazole-2% & Zinc Pyrithone Lotion
90	Anti-Dandruff Lotion: Fluconazole-2% & ZPTO Lotion
91	Sunscreen Lotion: Avobenzone, Oxybenzone And Octinoxate And Titanium Dioxide Lotion
92	Sunscreen Lotion (Broad Spectrum): Avobenzone, Octinoxate,Octicrylene ,OMC & Zinc Oxide Lotion
93	Menthol 10%, Methyl Salicylate 30% and Camphor 4% Cream
94	Moisturising Cream: White Soft Paraffin And Liquid Paraffin Cream
95	Cleansing Lotion: Salicylic Acid with Cetyl & Steryl Alcohal Lotion
96	Facewash: Salicylic Acid Foaming Facewash 1% & 2% w/v
97	Clobetasole Propionate, Neomycin 0.05%w/w , Miconazole 2%w/w, Cetrimide 0.6%w/w and Glycerin 3%w/w Cream
98	Clindamycin And Isotretinoin 0.05% Gel
99	Octinoxate 7.5%,Avobenzone 2% w/v,Oxybenzone 3% w/v & Zinc Oxide 2% w/v Lotion
100	Hydroquinone, Tretinoin and Hydrocortisone Cream
101	Hydroquinone, Tretinoin and Mometasone Gel
102	Calamine-8% and Liquid Paraffin-10% Lotion
103	Zinc Oxide Cream 32%w/w
104	Eflornithine Hydrochloride Cream 13.9%w/w
105	Hydroquinone 2%, Tretinoin 0.025% &Fluocinolone Acetonide .01% Cream
106	Sodium Pyrolidone Carboxylic Acid 2.5% w/w, Sodium Lactate 2.5% w/w, Vitamin E 1%w/w & Olive Oil 3%w/w Cream. – Natural Moisturising Factors
107	Clotrimazole Cream 1% w/w
108	Clotrimazole solution – 1% w/v
109	Miconazole Nitrate Cream 2%w/w
110	Terbinafine Hydrochloride Cream 1% w/w
111	Betamethasone Dipropionate Cream 0.05%w/w
112	Betamethasone Dipropionate Lotion – 0.05% w/w
113	Betamethsone & Salicyclic Acid-3% Lotion
114	Calcipotriol Lotion 0.005%w/v
115	Hydroquinone , Tretinoin and Mometasone Cream
116	Permethrin Lotion 5%w/v
117	Aqueous Calamine Cream
118	Aqueous Calamine-15% lotion with Bentonite Zinc Oxide etc.
119	Sucralfate 7%, Metronidazole 1% &Povidone Iodine 5% Ointment
120	Lidocaine 2.5% w/w & Prilocaine 2.5% w/w Gel
121	Ammonium Lactate Cream 12% w/w
122	Coal Tar 1%w/w, Salicylic Acid 3% & Precipitated Sulphur Ointment
123	Coal Tar and Salicylic Acid Scalp Lotion
124	Ketoconazole- 2% w/v and Prepared Coal Tar- 2%w/v Solution
125	Pimecrolimus Cream 1%
126	Desonide Cream 0.05%w/w
NEW APPROVALS:	
127	Clobetasone Butyrate 0.05%w/wCream
128	Methylprednisolone Aceponate Topical Solution 0.1%w/v
129	Methylprednisolone Aceponate 0.1%w/w & Mupirocin 2.0%w/w Cream
130	Miconazole Nitrate Gel 2% w/w
131	Clotrimazole & Selenium Sulfide Topical Lotion
132	Urea, Lactic Acid, Propylene Glycol and Liquid Paraffin Ointment
133	Beclomethasone, Clotrimazole & Neomycin Sulphate Cream
134	Ketoconazole, Zinc Pyrithione and Dexpanthenol Lotion
135	Diclofenac, Menthol, Mephensin, Methyl Salicylate & Turpentine Oil Gel
136	Beclomethasone Dipropionate, Clotrimazole & Gentamicin Sulphate Cream
137	Tretinoin Vanishing Cream 0.05%w/w
138	Kojic Acid & Vitamin C Cream
139	Gamma Benzene Hexachloride & Cetrimide Lotion
140	White Soft Paraffin & Liquid Paraffin Topical Lotion
141	White Soft Paraffin and Light Liquid Paraffin Cream`;

hugeOintmentsRaw.trim().split('\n').forEach(line => {
  if (line.includes("NEW APPROVALS:")) return;
  const parts = line.split('\t');
  if (parts.length >= 2) {
    const rawName = parts[1].trim();
    if (rawName && rawName.length > 2) {
      products.push({
        id: ++pIdx,
        categoryId: 2,
        categoryName: "Ointments and Creams",
        categorySlug: "ointments-and-creams",
        subCategory: "Ointments and Creams",
        name: rawName,
        slug: generateSlug(rawName) + '-' + pIdx,
        description: `General - ${rawName}`,
        genericName: "General"
      });
      catsArray[1].productCount++;
    }
  }
});

const content = `/** GENERATED EXACTLY FOR STATIC DEPLOYMENTS */
export const categoriesData = ${JSON.stringify(catsArray, null, 2)};
export const productsData = ${JSON.stringify(products, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../../lib/api-client-react/src/static-data.ts");
fs.writeFileSync(outputPath, content);
console.log("Data exploded into distinct categories locally.");
