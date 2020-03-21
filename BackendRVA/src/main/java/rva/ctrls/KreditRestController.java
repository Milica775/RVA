package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Kredit;
import rva.repository.KreditRepository;

@RestController
public class KreditRestController {
	
	@Autowired
	private KreditRepository kreditRepository;
	
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

}
