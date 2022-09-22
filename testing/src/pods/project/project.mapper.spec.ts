import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as mapper from './project.mapper';

fdescribe('Project Mapper spec', () => {
  it('Should return Employee Sumary List VM', () => {
    const fakeEmployeeSumaryApi: apiModel.EmployeeSummary[] = [
      {
        id: '1',
        employeeName: 'Juan',
        isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Maria',
        isAssigned: false,
      },
    ];
    const fakeProjectApi: apiModel.Project = {
      id: '1',
      name: 'Project Name',
      employees: fakeEmployeeSumaryApi,
      externalId: 'abc',
      isActive: true,
      comments: 'Comments',
    };
    const expectedResult: viewModel.EmployeeSummary = {
      id: '1',
      employeeName: 'Juan',
      isAssigned: true,
    };
    const result = mapper.mapProjectFromApiToVm(fakeProjectApi);

    expect(result).toEqual(fakeProjectApi);
    expect(result.employees[0]).toEqual(expectedResult);
  });

  it('Should return [] on empty employees array on project', () => {
    const fakeEmployeeSumaryApi: apiModel.EmployeeSummary[] = [];
    const fakeProjectApi: apiModel.Project = {
      id: '1',
      name: 'Project Name',
      employees: fakeEmployeeSumaryApi,
      externalId: 'abc',
      isActive: true,
      comments: 'Comments',
    };

    const result = mapper.mapProjectFromApiToVm(fakeProjectApi);

    expect(result.employees).toEqual([]);
  });

  it('Should return new empty project when feeds falsy value', () => {
    const resultNull = mapper.mapProjectFromApiToVm(null);
    const resultUndefined = mapper.mapProjectFromApiToVm(undefined);

    expect(resultNull.id).toBe('');
    expect(resultNull.isActive).toBe(false);

    expect(resultUndefined.name).toBe('');
    expect(resultNull.employees).toEqual([]);
  });
});
