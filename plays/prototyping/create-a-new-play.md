# Create a new play

Start by reading the [contribution guidelines](../CONTRINUTING.md) to see how to get playbook running locally and release new versions.

A good play contains the following elements:
- A well defined problem or scenario
- A solution backed with a real working example
- An explanation of how the solution works
- An explanation of why the solution is appropriate

Here's some guidelines to get started creating one.

## Development of a play

@todo move this into an issue template

1. Create an issue defining the problem space. Tag it with `new play`.
2. List the proposed play in [README.md](../README.md) linking it to issue.
3. Open a PR defining the proposed solution.
4. Update REAMDE link to point to PR.
5. Seek feedback and develop according to the [play anatomy](#anatomy-of-a-play).
6. Get it merged and change README link to play document.


## Anatomy of a play

@todo move this into a template document and check list in a PR template

- A play document in [/plays](../plays)
  - Expansion of the problem space
  - Explanation of how the solution works (use diagrams where helpful!)
  - Brief explanation of why the solution is appropriate or was chosen
  - Links to the coded solution (probably best to avoid linking to line numbers)
  - Links to the original issue and PR
  - Tips on migrating to the play if it replaces an existing play
- A working coded solution
  - Inline comments, explaining and justifying the solution and with a link to the play document
  - Tests where appropriate
  - Consideration of whether the solution should be part of the playbook boilerplate or if it would be better packaged into it's own module (in which case you just need to document how to consume it)
