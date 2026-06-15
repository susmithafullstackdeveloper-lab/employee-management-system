package com.susmitha.employees.service;

import com.susmitha.employees.exception.ResourceNotFoundException;
import com.susmitha.employees.model.Employee;
import com.susmitha.employees.repo.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Page<Employee> getAllEmployees(int page, int size, String sortBy) {
        return employeeRepository.findAll(PageRequest.of(page, size, Sort.by(sortBy)));
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee existing = getEmployeeById(id);
        existing.setName(employee.getName());
        existing.setEmail(employee.getEmail());
        existing.setDepartment(employee.getDepartment());
        existing.setDesignation(employee.getDesignation());
        existing.setSalary(employee.getSalary());
        return employeeRepository.save(existing);
    }

    public void deleteEmployee(Long id) {
        Employee existing = getEmployeeById(id);
        employeeRepository.delete(existing);
    }

    public List<Employee> searchEmployees(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }
}
