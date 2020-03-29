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

import rva.jpa.Kredit;
import rva.repository.KreditRepository;

@RestController
public class KreditRestController {
	
	@Autowired
	private KreditRepository kreditRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("kredit")
	public Collection<Kredit> getKrediti(){
		return kreditRepository.findAll();
	}
	
	@GetMapping("kredit/{id}")
	public Kredit getKredit(@PathVariable("id") Integer id) {
		return kreditRepository.getOne(id);
	}
	
	@GetMapping("kreditNaziv/{naziv}")
	public Collection<Kredit> getKreditByNaziv(@PathVariable("naziv") String naziv)
	{
		return kreditRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("kredit")
	public ResponseEntity<Kredit> insertKredit(@RequestBody Kredit kredit){
		if(!kreditRepository.existsById(kredit.getId())) {
			kreditRepository.save(kredit);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	@PutMapping("kredit")
	public ResponseEntity<Kredit> updateKredit(@RequestBody Kredit kredit){
		if(!kreditRepository.existsById(kredit.getId()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		kreditRepository.save(kredit);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("kredit/{id}")
	public ResponseEntity<Kredit> deleteKredit(@PathVariable("id") Integer id){
		if(!kreditRepository.existsById(id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		kreditRepository.deleteById(id);
		if(id==8)
		   jdbcTemplate.execute("INSERT INTO \"kredit\" (\"id\",\"naziv\",\"opis\",\"oznaka\")"
				   +"VALUES (8,'Studentski kredit','Kredit za plaćanje troškova upisa','studKredit8') ");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

}
