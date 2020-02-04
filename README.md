# Pixogram App using Angular
## Angular LifeCycle hooks.
1. lifecycle starts from initiation and ends when distroyed
2. divided into multiple phases
3. Each of those interface provides a method, this method is known as life-cycle hook method. 
4. hook method is a callback method, that means the method gets invoked automatically when that phase occurs.
## pipes
1. pipes allow to trasform the data to something else for presentation purpose.
2. Data returned from pipe is not rendered as html, it is a literal text.
## SERVER SIDE SCRIPTS
1. server side scripts get traslated and executed on server, output of that execution is then rendered into a dynamic html, which is sent to client as response.
2. For any multitier framework, every layer must have a container. containers are responsible for handling all the low level activities related to that layer, and also provides a location to hold the elements of that layer.
## Servlet
1. Redirect : - It is a process, which terminates the existing exist cycle, and issues a new request, thats why data of the previous request will not available going ahead.
2. Forward: - forward represents carrying the request to the next resource along with data of original request.
# Beans & Services
1. Always create services using interface design pattern.
2. IOC : - inversion of control is outsourcing the creation and management of objects to a bean factory
3. Bean : - controller managed java objects are known as java objects.
4. Two types of dependency injection in xml :
    - constructor based dependencies.
    - setter based dependencies.
    - The literal values are supposed to be placed in a separate 
      repository, defined by properties file.
      `<context:property-placeholder location="message.repo.properties/>`
    - To use the property :- `${key}`
4. object created by bean factory is by default of singleton scope.
    - singleton : - only one instance is created.
    - whenever we demand, an object from spring context, it returns the same instance everytime.
    - spring context doesnt maintain lifecycles for prototype object.
5. LifeCycle hook methods
    - can have any name
    - can have any access modifier
    - can return value
    - cannot have parameters.    

6. All the classes under the scanning path decorated with `@Component` annotation is automatically used by spring context to manage their beans.
7. Dependency injections are done by using `@Autowired` annotation. It is not mandatory for constructor.
8.  Every field, class and method decorated with `@Autowired` gets injected with dependency right after object creation, irrespective of their access modifier.
