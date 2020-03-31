package orion.zenite.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import orion.zenite.models.Nivel;

public interface NivelDao extends JpaRepository<Nivel, Integer> {
    @Query(value = "select max(n.id) from Nivel n")
    int lastId();

    Nivel findByDescricao(String descricao);
}