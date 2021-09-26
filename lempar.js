/*
** 2000-05-29
**
** The author disclaims copyright to this source code.  In place of
** a legal notice, here is a blessing:
**
**    May you do good and not evil.
**    May you find forgiveness for yourself and forgive others.
**    May you share freely, never taking more than you give.
**
** Based on SQLite distribution v3.17.0
** Adopted for JavaScript by Artem Butusov <art.sormy@gmail.com>
**
*************************************************************************
** Driver template for the LEMON parser generator.
**
** The "lemon" program processes an LALR(1) input grammar file, then uses
** this template to construct a parser.  The "lemon" program inserts text
** at each "%%" line.  Also, any "P-a-r-s-e" identifer prefix (without the
** interstitial "-" characters) contained in this template is changed into
** the value of the %name directive from the grammar.  Otherwise, the content
** of this template is copied straight through into the generate parser
** source file.
**
** The following is the concatenation of all %include directives from the
** input grammar file:
*/
/************ Begin %include sections from the grammar ************************/
%%
/**************** End of %include directives **********************************/
function Parse() {
/**************** End of %include directives **********************************/
/* These constants specify the various numeric values for terminal symbols.
***************** Begin token definitions *************************************/
%%
/**************** End token definitions ***************************************/

/* The next sections is a series of control #defines.
** various aspects of the generated parser.
**    YYNOCODE           is a number of type YYCODETYPE that is not used for
**                       any terminal or nonterminal symbol.
**    YYFALLBACK         If defined, this indicates that one or more tokens
**                       (also known as: "terminal symbols") have fall-back
**                       values which should be used if the original symbol
**                       would not parse.  This permits keywords to sometimes
**                       be used as identifiers, for example.
**    YYSTACKDEPTH       is the maximum depth of the parser's stack.  If
**                       zero the stack is dynamically sized using realloc()
**    YYERRORSYMBOL      is the code number of the error symbol.  If not
**                       defined, then do no error processing.
**    YYNSTATE           the combined number of states.
**    YYNRULE            the number of rules in the grammar
**    YYNTOKEN           Number of terminal symbols
**    YY_MAX_SHIFT       Maximum value for shift actions
**    YY_MIN_SHIFTREDUCE Minimum value for shift-reduce actions
**    YY_MAX_SHIFTREDUCE Maximum value for shift-reduce actions
**    YY_ERROR_ACTION    The yy_action[] code for syntax error
**    YY_ACCEPT_ACTION   The yy_action[] code for accept
**    YY_NO_ACTION       The yy_action[] code for no-op
**    YY_MIN_REDUCE      Minimum value for reduce actions
**    YY_MAX_REDUCE      Maximum value for reduce actions
*/
/************* Begin control #defines *****************************************/
%%
/************* End control #defines *******************************************/

/* Define the yytestcase() macro to be a no-op if is not already defined
** otherwise.
**
** Applications can choose to define yytestcase() in the %include section
** to a macro that can assist in verifying code coverage.  For production
** code the yytestcase() macro should be turned off.  But it is useful
** for testing.
*/
if (!this.yytestcase) {
  this.yytestcase = function () {};
}


/* Next are the tables used to determine what action to take based on the
** current state and lookahead token.  These tables are used to implement
** functions that take a state number and lookahead value and return an
** action integer.
**
** Suppose the action integer is N.  Then the action is determined as
** follows
**
**   0 <= N <= YY_MAX_SHIFT             Shift N.  That is, push the lookahead
**                                      token onto the stack and goto state N.
**
**   N between YY_MIN_SHIFTREDUCE       Shift to an arbitrary state then
**     and YY_MAX_SHIFTREDUCE           reduce by rule N-YY_MIN_SHIFTREDUCE.
**
**   N == YY_ERROR_ACTION               A syntax error has occurred.
**
**   N == YY_ACCEPT_ACTION              The parser accepts its input.
**
**   N == YY_NO_ACTION                  No such action.  Denotes unused
**                                      slots in the yy_action[] table.
**
**   N between YY_MIN_REDUCE            Reduce by rule N-YY_MIN_REDUCE
**     and YY_MAX_REDUCE
**
** The action table is constructed as a single large table named yy_action[].
** Given state S and lookahead X, the action is computed as either:
**
**    (A)   N = yy_action[ yy_shift_ofst[S] + X ]
**    (B)   N = yy_default[S]
**
** The (A) formula is preferred.  The B formula is used instead if
** yy_lookahead[yy_shift_ofst[S]+X] is not equal to X.
**
** The formulas above are for computing the action when the lookahead is
** a terminal symbol.  If the lookahead is a non-terminal (as occurs after
** a reduce action) then the yy_reduce_ofst[] array is used in place of
** the yy_shift_ofst[] array.
**
** The following are the tables generated in this section:
**
**  yy_action[]        A single table containing all actions.
**  yy_lookahead[]     A table containing the lookahead for each entry in
**                     yy_action.  Used to detect hash collisions.
**  yy_shift_ofst[]    For each state, the offset into yy_action for
**                     shifting terminals.
**  yy_reduce_ofst[]   For each state, the offset into yy_action for
**                     shifting non-terminals after a reduce.
**  yy_default[]       Default action for each state.
**
*********** Begin parsing tables **********************************************/
%%
/********** End of lemon-generated parsing tables *****************************/

/* The next table maps tokens (terminal symbols) into fallback tokens.
** If a construct like the following:
**
**      %fallback ID X Y Z.
**
** appears in the grammar, then ID becomes a fallback token for X, Y,
** and Z.  Whenever one of the tokens X, Y, or Z is input to the parser
** but it does not parse, the type of the token is changed to ID and
** the parse is retried before an error is thrown.
**
** This feature can be used, for example, to cause some keywords in a language
** to revert to identifiers if they keyword does not apply in the context where
** it appears.
*/
this.yyFallback = [
%%
];

/* The following structure represents a single element of the
** parser's stack.  Information stored includes:
**
**   +  The state number for the parser at this level of the stack.
**
**   +  The value of the token stored at this level of the stack.
**      (In other words, the "major" token.)
**
**   +  The semantic value stored at this level of the stack.  This is
**      the information used by the action routines in the grammar.
**      It is sometimes called the "minor" token.
**
** After the "shift" half of a SHIFTREDUCE action, the stateno field
** actually contains the reduce action for the second half of the
** SHIFTREDUCE.
*/
//{
//  stateno,  /* The state-number, or reduce action in SHIFTREDUCE */
//  major,    /* The major token value.  This is the code
//            ** number for the token at this stack level */
//  minor,    /* The user-supplied minor token value.  This
//            ** is the value of the token  */
//}

/* The state of the parser is completely contained in an instance of
** the following structure */
this.yyhwm = 0;               /* High-water mark of the stack */
this.yyerrcnt = -1;           /* Shifts left before out of the error */
this.yystack = null;          /* The parser's stack */
this.yyidx = -1;              /* Stack index of current element in the stack */

this.yyTraceCallback = null;
this.yyTracePrompt = "";

/*
** Turn parser tracing on by giving a stream to which to write the trace
** and a prompt to preface each trace message.  Tracing is turned off
** by making either argument NULL
**
** Inputs:
** <ul>
** <li> A callback to which trace output should be written.
**      If NULL, then tracing is turned off.
** <li> A prefix string written at the beginning of every
**      line of trace output. Default is "".
** </ul>
**
** Outputs:
** None.
*/
this.setTraceCallback = function (callback, prompt) {
  this.yyTraceCallback = callback;
  this.yyTracePrompt = prompt || "";
}

this.trace = function (message) {
  this.yyTraceCallback(this.yyTracePrompt + message + "\n");
}

/* For tracing shifts, the names of all terminals and nonterminals
** are required.  The following table supplies these names */
this.yyTokenName = [
%%
];

/* For tracing reduce actions, the names of all rules are required.
*/
this.yyRuleName = [
%%
];
/*
** Try to increase the size of the parser stack.  Return the number
** of errors.  Return 0 on success.
*/
this.yyGrowStack = function () {
  // fix me: yystksz*2 + 100
  this.yystack.push({
    stateno: undefined,
    major: undefined,
    minor: undefined
  });
}

/* Initialize a new parser that has already been allocated.
*/
this.init = function () {
  this.yyhwm = 0;
  this.yyerrcnt = -1;
  this.yyidx = 0;
  if (this.YYSTACKDEPTH <= 0) {
    this.yystack = [];
    this.yyGrowStack();
  } else {
    this.yystack = new Array(this.YYSTACKDEPTH);
    for (var i = 0; i < this.YYSTACKDEPTH; i++) {
      this.yystack[i] = {
        stateno: undefined,
        major: undefined,
        minor: undefined
      };
    }
  }
  var yytos = this.yystack[0];
  yytos.stateno = 0;
  yytos.major = 0;
}

/* The following function deletes the "minor type" or semantic value
** associated with a symbol.  The symbol can be either a terminal
** or nonterminal. "yymajor" is the symbol code, and "yypminor" is
** a pointer to the value to be deleted.  The code used to do the
** deletions is derived from the %destructor and/or %token_destructor
** directives of the input grammar.
*/
this.yy_destructor = function (
  yymajor,  /* Type code for object to destroy */
  yyminor   /* The object to be destroyed */
) {
  switch (yymajor) {
    /* Here is inserted the actions which take place when a
    ** terminal or non-terminal is destroyed.  This can happen
    ** when the symbol is popped from the stack during a
    ** reduce or during error processing or when a parser is
    ** being destroyed before it is finished parsing.
    **
    ** Note: during a reduce, the only symbols destroyed are those
    ** which appear on the RHS of the rule, but which are *not* used
    ** inside the C code.
    */
/********* Begin destructor definitions ***************************************/
%%
/********* End destructor definitions *****************************************/
    default:  break;   /* If no destructor action specified: do nothing */
  }
}

/*
** Pop the parser's stack once.
**
** If there is a destructor routine associated with the token which
** is popped from the stack, then call it.
*/
this.yy_pop_parser_stack = function () {
  // assert( pParser->yytos!=0 );
  // assert( pParser->yytos > pParser->yystack );
  var yytos = this.yystack[this.yyidx];

  if (this.yyTraceCallback) {
    this.trace("Popping " + this.yyTokenName[yytos.major]);
  }
  this.yy_destructor(yytos.major, yytos.minor);

  this.yyidx--;
}

/*
** Clear all secondary memory allocations from the parser
*/
this.finalize = function () {
  while (this.yyidx > 0) {
    this.yy_pop_parser_stack();
  }
  this.yystack = null;
}

/*
** Return the peak depth of the stack for a parser.
*/
this.getStackPeak = function () {
  return this.yyhwm;
}

/*
** Find the appropriate action for a parser given the terminal
** look-ahead token iLookAhead.
*/
this.yy_find_shift_action = function (
  iLookAhead,     /* The look-ahead token */
  stateno         /* Current state number */
) {
  if (stateno > this.YY_MAX_SHIFT) {
    return stateno;
  }

  // assert( stateno <= YY_SHIFT_COUNT );

  do {
    var i = this.yy_shift_ofst[stateno];
    // assert( i>=0 );
    // assert( i<=YY_ACTTAB_COUNT );
    // assert( i+YYNTOKEN<=(int)YY_NLOOKAHEAD );
    // assert( iLookAhead!=YYNOCODE );
    // assert( iLookAhead < YYNTOKEN );
    i += iLookAhead;
    // assert( i<(int)YY_NLOOKAHEAD );
    if (this.yy_lookahead[i] != iLookAhead) {
      if (this.YYFALLBACK) {
        var iFallback;  /* Fallback token */
        // assert( iLookAhead<sizeof(yyFallback)/sizeof(yyFallback[0]) );
        iFallback = this.yyFallback[iLookAhead];
        if (iFallback != 0) {
          if (this.yyTraceCallback) {
            this.trace("FALLBACK " + this.yyTokenName[iLookAhead] + " => " + this.yyTokenName[iFallback]);
          }
        }
        // assert( yyFallback[iFallback]==0 ); /* Fallback loop must terminate */
        iLookAhead = iFallback;
        continue;
      }

      if (this.YYWILDCARD) {
        var j = i - iLookAhead + this.YYWILDCARD;
        // assert( j<(int)(sizeof(yy_lookahead)/sizeof(yy_lookahead[0])) );
        if (this.yy_lookahead[j] == this.YYWILDCARD && iLookAhead > 0) {
          if (this.yyTraceCallback) {
            this.trace("WILDCARD " + this.yyTokenName[iLookAhead] + " => " + this.yyTokenName[this.YYWILDCARD]);
          }
          return this.yy_action[j];
        }
      }

      return this.yy_default[stateno];
    } else {
      // assert( i>=0 && i<(int)(sizeof(yy_action)/sizeof(yy_action[0])) );
      return this.yy_action[i];
    }
  } while (true);
}

/*
** Find the appropriate action for a parser given the non-terminal
** look-ahead token iLookAhead.
*/
this.yy_find_reduce_action = function (
  stateno,       /* Current state number */
  iLookAhead     /* The look-ahead token */
) {
  if (this.YYERRORSYMBOL) {
    if (stateno > this.YY_REDUCE_COUNT) {
      return this.yy_default[stateno];
    }
  } else {
    // assert( stateno<=YY_REDUCE_COUNT );
  }

  var i = this.yy_reduce_ofst[stateno];
  // assert( iLookAhead!=YYNOCODE );
  i += iLookAhead;

  if (this.YYERRORSYMBOL) {
    if (i < 0 || i >= this.yy_action.length || this.yy_lookahead[i] != iLookAhead) {
      return this.yy_default[stateno];
    }
  } else {
    // assert( i>=0 && i<YY_ACTTAB_COUNT );
    // assert( yy_lookahead[i]==iLookAhead );
  }

  return this.yy_action[i];
}

/*
** The following routine is called if the stack overflows.
*/
this.yyStackOverflow = function () {
  if (this.yyTraceCallback) {
    this.trace("Stack Overflow!");
  }

  while (this.yyidx > 0) {
    this.yy_pop_parser_stack();
  }
  /* Here code is inserted which will execute if the parser
  ** stack every overflows */
/******** Begin %stack_overflow code ******************************************/
%%
/******** End %stack_overflow code ********************************************/
}

/*
** Print tracing information for a SHIFT action
*/
this.yyTraceShift = function (yyNewState, zTag) {
  if (this.yyTraceCallback) {
    var yytos = this.yystack[this.yyidx];
    if (yyNewState < this.YYNSTATE) {
      this.trace(zTag + " '" + this.yyTokenName[yytos.major] + "', go to state " + yyNewState);
    } else {
      this.trace(zTag + " '" + this.yyTokenName[yytos.major] + "', pending reduce " + (yyNewState - this.YY_MIN_REDUCE));
    }
  }
}

/*
** Perform a shift action.
*/
this.yy_shift = function (
  yyNewState,    /* The new state to shift in */
  yyMajor,       /* The major token to shift in */
  yyMinor        /* The minor token to shift in */
) {
  this.yyidx++;

  if (this.yyidx > this.yyhwm) {
    this.yyhwm++;
    // assert( yypParser->yyhwm == (int)(yypParser->yytos - yypParser->yystack) );
  }

  if (this.YYSTACKDEPTH > 0) {
    if (this.yyidx >= this.YYSTACKDEPTH) {
      this.yyidx--;
      this.yyStackOverflow();
      return;
    }
  } else {
    if (this.yyidx >= this.yystack.length) {
      this.yyGrowStack();
    }
  }

  if (yyNewState > this.YY_MAX_SHIFT) {
    yyNewState += this.YY_MIN_REDUCE - this.YY_MIN_SHIFTREDUCE;
  }

  var yytos = this.yystack[this.yyidx];
  yytos.stateno = yyNewState;
  yytos.major = yyMajor;
  yytos.minor = yyMinor;

  this.yyTraceShift(yyNewState, "Shift");
}

/* For rule J, yyRuleInfoLhs[J] contains the symbol on the left-hand side
** of that rule */
this.yyRuleInfoLhs = [
%%
];

/* For rule J, yyRuleInfoNRhs[J] contains the negative of the number
** of symbols on the right-hand side of that rule. */
this.yyRuleInfoNRhs = [
%%
];

/*
** Perform a reduce action and the shift that must immediately
** follow the reduce.
**
** The yyLookahead and yyLookaheadToken parameters provide reduce actions
** access to the lookahead token (if any).  The yyLookahead will be YYNOCODE
** if the lookahead token has already been consumed.  As this procedure is
** only called from one place, optimizing compilers will in-line it, which
** means that the extra parameters have no performance impact.
*/
this.yy_reduce = function (
  yyruleno         /* Number of the rule by which to reduce */,
  yyLookahead,     /* Lookahead token, or YYNOCODE if none */
  yyLookaheadToken /* Value of the lookahead token */
){
  var yymsp = this.yystack[this.yyidx]; /* The top of the parser's stack */

  var yylhsminor;
  switch (yyruleno) {
  /* Beginning here are the reduction cases.  A typical example
  ** follows:
  **   case 0:
  **  #line <lineno> <grammarfile>
  **     { ... }           // User supplied code
  **  #line <lineno> <thisfile>
  **     break;
  */
/********** Begin reduce actions **********************************************/
%%
/********** End reduce actions ************************************************/
  };
  // assert( yyruleno<sizeof(yyRuleInfoLhs)/sizeof(yyRuleInfoLhs[0]) );

  var yygoto = this.yyRuleInfoLhs[yyruleno];    /* The next state */
  var yysize = this.yyRuleInfoNRhs[yyruleno];   /* Amount to pop the stack */
  var yyact = this.yy_find_reduce_action(   /* The next action */
    this.yystack[this.yyidx + yysize].stateno,
    yygoto
  );

  /* There are no SHIFTREDUCE actions on nonterminals because the table
  ** generator has simplified them to pure REDUCE actions. */
  // assert( !(yyact>YY_MAX_SHIFT && yyact<=YY_MAX_SHIFTREDUCE) );

  /* It is not possible for a REDUCE to be followed by an error */
  // assert( yyact!=YY_ERROR_ACTION );

    this.yyidx += yysize + 1;
    yymsp = this.yystack[this.yyidx];
    yymsp.stateno = yyact;
    yymsp.major = yygoto;
    this.yyTraceShift(yyact, "... then shift");
    return yyact;
}

/*
** The following code executes when the parse fails
*/
this.yy_parse_failed = function () {
  if (this.yyTraceCallback) {
    this.trace("Fail!");
  }
  while (this.yyidx > 0) {
    this.yy_pop_parser_stack();
  }
  /* Here code is inserted which will be executed whenever the
  ** parser fails */
/************ Begin %parse_failure code ***************************************/
%%
/************ End %parse_failure code *****************************************/
}

/*
** The following code executes when a syntax error first occurs.
*/
this.yy_syntax_error = function (
  yymajor,        /* The major type of the error token */
  yyminor         /* The minor type of the error token */
) {
  var TOKEN = yyminor;
/************ Begin %syntax_error code ****************************************/
%%
/************ End %syntax_error code ******************************************/
}

/*
** The following is executed when the parser accepts
*/
this.yy_accept = function () {
  if (this.yyTraceCallback) {
    this.trace("Accept!");
  }
  if (!this.YYNOERRORRECOVERY) {
    this.yyerrcnt = -1;
  }
  // assert( yypParser->yytos==yypParser->yystack );
  /* Here code is inserted which will be executed whenever the
  ** parser accepts */
/*********** Begin %parse_accept code *****************************************/
%%
/*********** End %parse_accept code *******************************************/
}

/* The main parser program.
** The first argument is a pointer to a structure obtained from
** "ParseAlloc" which describes the current state of the parser.
** The second argument is the major token number.  The third is
** the minor token.  The fourth optional argument is whatever the
** user wants (and specified in the grammar) and is available for
** use by the action routines.
**
** Inputs:
** <ul>
** <li> A pointer to the parser (an opaque structure.)
** <li> The major token number.
** <li> The minor token number.
** <li> An option argument of a grammar-specified type.
** </ul>
**
** Outputs:
** None.
*/
this.parse = function (
  yymajor,                  /* The major token code number */
  yyminor                   /* The value for the token */
) {
  var yyact;            /* The parser action. */
  var yyendofinput;     /* True if we are at the end of input */
  var yyerrorhit = 0;   /* True if yymajor has invoked an error */

  //assert( yypParser->yytos!=0 );

  if (yymajor === undefined || yymajor === null) {
    yymajor = 0;
  }

  yyendofinput = yymajor == 0;

  yyact = this.yystack[this.yyidx].stateno;
  if (this.yyTraceCallback) {
    if (yyact < this.YY_MIN_REDUCE) {
      this.trace("Input '" + this.yyTokenName[yymajor] + "' in state " + yyact);
    } else {
      this.trace("Input '" + this.yyTokenName[yymajor] + "' with pending reduce " + (yyact - this.YY_MIN_REDUCE));
    }
  }

  while (true) { /* Exit by "break" */
    // assert( yypParser->yytos>=yypParser->yystack );
    // assert( yyact==yypParser->yytos->stateno );
    yyact = this.yy_find_shift_action(yymajor, yyact);
    if (yyact >= this.YY_MIN_REDUCE) {
      var yyruleno = yyact - this.YY_MIN_REDUCE;
      // assert( yyruleno<(int)(sizeof(yyRuleName)/sizeof(yyRuleName[0])) );
      if (this.yyTraceCallback) {
        var yysize = this.yyRuleInfoNRhs[yyruleno];
        this.trace(
          "Reduce " + yyruleno +
          " [" + this.yyRuleName[yyruleno] + "]" +
          (yyruleno < this.YYNRULE_WITH_ACTION ? "" : " without external action") +
          (!yysize ? "" : ", pop back to state " + this.yystack[this.yyidx + yysize].stateno) +
          ".");
      }
      yyact = this.yy_reduce(yyruleno, yymajor, yyminor);
    } else if (yyact <= this.YY_MAX_SHIFTREDUCE) {
      this.yy_shift(yyact, yymajor, yyminor);
      if (!this.YYNOERRORRECOVERY) {
        this.yyerrcnt--;
      }
      break;
    } else if (yyact == this.YY_ACCEPT_ACTION) {
      this.yyidx--;
      this.yy_accept();
      return;
    } else {
      // assert( yyact == YY_ERROR_ACTION );
      if (this.yyTraceCallback) {
        this.trace("Syntax Error!");
      }
      if (this.YYERRORSYMBOL) {
        /* A syntax error has occurred.
        ** The response to an error depends upon whether or not the
        ** grammar defines an error token "ERROR".
        **
        ** This is what we do if the grammar does define ERROR:
        **
        **  * Call the %syntax_error function.
        **
        **  * Begin popping the stack until we enter a state where
        **    it is legal to shift the error symbol, then shift
        **    the error symbol.
        **
        **  * Set the error count to three.
        **
        **  * Begin accepting and shifting new tokens.  No new error
        **    processing will occur until three tokens have been
        **    shifted successfully.
        **
        */
        if (this.yyerrcnt < 0) {
          this.yy_syntax_error(yymajor, yyminor);
        }
        var yymx = this.yystack[this.yyidx].major;
        if (yymx == this.YYERRORSYMBOL || yyerrorhit) {
          if (this.yyTraceCallback) {
            this.trace("Discard input token " + this.yyTokenName[yymajor]);
          }
          this.yy_destructor(yymajor, yyminor);
          yymajor = this.YYNOCODE;
        } else {
          while (this.yyidx >= 0
              && (yyact = this.yy_find_reduce_action(
                          this.yystack[this.yyidx].stateno,
                          this.YYERRORSYMBOL)) > this.YY_MAX_SHIFTREDUCE
          ) {
            this.yy_pop_parser_stack();
          }
          if (this.yyidx < 0 || yymajor == 0) {
            this.yy_destructor(yymajor, yyminor);
            this.yy_parse_failed();
            if (!this.YYNOERRORRECOVERY) {
              this.yyerrcnt = -1;
            }
            yymajor = this.YYNOCODE;
          } else if (yymx != this.YYERRORSYMBOL) {
            this.yy_shift(yyact, this.YYERRORSYMBOL, yyminor); // check me?
          }
        }
        this.yyerrcnt = 3;
        yyerrorhit = 1;
        if (yymajor == this.YYNOCODE) break;
        yyact = this.yystack[this.yyidx].stateno;
      } else if (this.YYNOERRORRECOVERY) {
        /* If the YYNOERRORRECOVERY macro is defined, then do not attempt to
        ** do any kind of error recovery.  Instead, simply invoke the syntax
        ** error routine and continue going as if nothing had happened.
        **
        ** Applications can set this macro (for example inside %include) if
        ** they intend to abandon the parse upon the first syntax error seen.
        */
        this.yy_syntax_error(yymajor, yyminor);
        this.yy_destructor(yymajor, yyminor);
        break;
      } else {  /* YYERRORSYMBOL is not defined */
        /* This is what we do if the grammar does not define ERROR:
        **
        **  * Report an error message, and throw away the input token.
        **
        **  * If the input token is $, then fail the parse.
        **
        ** As before, subsequent error messages are suppressed until
        ** three input tokens have been successfully shifted.
        */
        if (this.yyerrcnt <= 0) {
          this.yy_syntax_error(yymajor, yyminor);
        }
        this.yyerrcnt = 3;
        this.yy_destructor(yymajor, yyminor);
        if (yyendofinput) {
          this.yy_parse_failed();
          if (!this.YYNOERRORRECOVERY) {
            this.yyerrcnt = -1;
          }
        }
        break;
      }
    }
  }

  if (this.yyTraceCallback) {
    var remainingTokens = [];
    for (var i = 1; i <= this.yyidx; i++) {
      remainingTokens.push(this.yyTokenName[this.yystack[i].major]);
    }
    this.trace("Return. Stack=[" + remainingTokens.join(" ") + "]");
  }
}

this.init();

} // function Parse()
