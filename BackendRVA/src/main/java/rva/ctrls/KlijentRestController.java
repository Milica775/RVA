package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Klijent;
import rva.jpa.Kredit;
import rva.repository.KlijentRepository;
import rva.repository.KreditRepository;

@RestController
@Api(tags= {"Klijent CRUD operacije"})
public class KlijentRestController {
	
	@Autowired
	private KlijentRepository klijentRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private KreditRepository kreditRepository;
	
	@GetMapping("klijent")
	@ApiOperation(value="Vraća kolekciju svih klijenata iz baze podataka")
	public Collection<Klijent> getKlijenti(){
		return klijentRepository.findAll();
	}
	
	@GetMapping("klijent/{id}")
	@ApiOperation(value="Vraća klijenta iz baze podataka čija je id vrijednost proslijeđena kao path varijabla")
	public Klijent getKlijent(@PathVariable("id") Integer id) {
		return klijentRepository.getOne(id);
	}
	
	@GetMapping("klijentLicnaKarta/{brojLk}")
	@ApiOperation(value="Vraća klijenta iz baze podataka čiji je broj lične karte proslijeđen kao path varijabla")
	public Klijent getKlijentByBrojLk(@PathVariable("brojLk") Integer brojLk) {
		return klijentRepository.findByBrojLk(brojLk);
	}
	

	
	@GetMapping("klijentiPoKredituId/{id}")
	@ApiOperation(value="Vraća kolekciju svih klijenata iz baze podataka koji imaju kredit čija id vrijednost je proslijeđena kao path varijabla")

	public Collection<Klijent> getKlijentiByKredit(@PathVariable("id") int id)
	{
		Kredit kredit= kreditRepository.getOne(id);
		return klijentRepository.findByKredit(kredit);
	}
	
	

	@PostMapping("klijent")
	@ApiOperation(value="Upisuje klijenta u bazu podataka")
	public ResponseEntity<Klijent> insertKlijent(@RequestBody Klijent klijent){
		if(!klijentRepository.existsById(klijent.getId())) {
			klijentRepository.save(klijent);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("klijent")
	@ApiOperation(value="Modifikuje postojećeg klijenta u bazi podataka")
	public ResponseEntity<Klijent> updateKlijent(@RequestBody Klijent klijent){
		if(!klijentRepository.existsById(klijent.getId()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		klijentRepository.save(klijent);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("klijent/{id}")
	@ApiOperation(value="Briše klijenta iz baze podataka čija je id vrijednost proslijeđena kao path varijabla")
	public ResponseEntity<Klijent> deleteKlijent(@PathVariable("id") Integer id){
		if(!klijentRepository.existsById(id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		klijentRepository.deleteById(id);
		if(id==10)
		   jdbcTemplate.execute("INSERT INTO \"klijent\" (\"id\",\"broj_lk\",\"ime\",\"prezime\",\"kredit\")"
				   +"VALUES (10,'665338','Marko','Lukić',1) ");
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
